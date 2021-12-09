import { Router } from "express";
import type { Request, Response } from 'express';
import { onErr } from "../utils/error";
import Feed from "../models/Feed";
import FeedComment from "../models/FeedComment";
import isUser from "../middleware/isUser";
const router = Router();

router.get('/', (req: Request, res: Response) => {

})

router.post('/:postId', isUser, async (req: Request, res: Response) => {
    if (!req.params.postId) return onErr(res, 'Specify a post to comment too.');

    if (!req.body.content) return onErr(res, 'The content of the comment cannot be empty');

    try {
        const comment = new FeedComment({ user: req.session?.user?.id, content: req.body.content, postId: req.params.postId });
        const result = await Feed.findByIdAndUpdate(req.params.postId, { $push: { comments: comment.id } })
        if (!result) return onErr(res, `Cannot find post ${req.params.postId}`);

        comment.save();
        return res.status(200).json(result)
    } catch (err) {
        return onErr(res, 'Could not post comment. Please try again', 500);
    }
})


export default router;