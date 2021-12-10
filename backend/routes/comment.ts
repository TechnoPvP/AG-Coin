import { Router } from "express";
import type { Request, Response } from 'express';
import { onErr } from "../utils/error";
import FeedComment, { sanitizeComment } from "../models/FeedComment";
import isUser from "../middleware/isUser";
import MongoError, { BaseMongoError } from "../validation/Mongo"
import type { User } from "shared/user"
import type { FeedComment as Comment } from "shared/feed"
const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    if (!req.params.id) return onErr(res, 'Specify a post to comment too.');

    try {
        const comments = await FeedComment
            .find( { postId: req.params.id } )
            .populate('user')
            .lean() as Comment<User>[];

        return res
            .status( 200 )
            .json( comments.map( sanitizeComment ) )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

router.post('/:postId', isUser, async (req: Request, res: Response) => {
    if (!req.params.postId) return onErr(res, 'Specify a post to comment too.');
    if (!req.body.content) return onErr(res, 'The content of the comment cannot be empty');

    try {
        const comment = await FeedComment.create({ 
            content: req.body.content,
            postId: req.params.postId,
            user: req.session.user?.id
        })

        return res
            .status( 200 )
            .json( comment )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})


export default router;