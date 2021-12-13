import { Router } from "express";
import type { Request, Response } from 'express';
import { onErr, ErrorHandler } from "../utils/error";
import { sanitizeComment } from "../models/FeedComment";
import isUser from "../middleware/isUser";
import { prisma } from "shared/prisma/main";
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const comments = await prisma.feedComment.findMany({
            include: { user: true }
        })

        type SanitizedComment = ReturnType<(typeof sanitizeComment)>
        const commentsMap = new Map<number, SanitizedComment[]>()
        comments.forEach( comment => {
            const mapResult = commentsMap.get( comment.feedId ) ?? []
            mapResult.push( sanitizeComment( comment ) )
            commentsMap.set( comment.feedId, mapResult )
        } )

        return res
            .status(200)
            .json( Object.fromEntries( commentsMap ) )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt( req.params.id )
    if (!id) return onErr(res, "No Feed-Post ID provided or/and Feed-Comment ID must be a number")

    try {
        const comments = await prisma.feedComment.findMany({ where: { feedId: id }, include: { user: true } })

        return res
            .status( 200 )
            .json( comments.map( sanitizeComment ) )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

router.post('/:id', isUser, async (req: Request, res: Response) => {
    const id = parseInt( req.params.id )
    if (!id) return onErr(res, "No Feed-Post ID provided or/and Feed-Comment ID must be a number")
    if (!req.body.content) return onErr(res, 'The content of the comment cannot be empty');

    try {
        const comment = await prisma.feedComment.create({ 
            data: {
                content: req.body.content,
                feedId: id,
                userID: req.session.user!.id
            },
            include: { user: true }
        })

        return res
            .status( 200 )
            .json( sanitizeComment( comment ) )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

export default router;