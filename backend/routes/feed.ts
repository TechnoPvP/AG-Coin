import { Router, Request, Response, NextFunction } from "express";
import { FeedPost, FeedComment } from "shared/feed";
import { User as UserType } from "shared/user";
import Feed from "../models/Feed";
import FeedValidation from "../validation/FeedV";
import { onErr } from "../utils/error";
import { isValidObjectId } from "mongoose";
import MongoError, { BaseMongoError } from "../validation/Mongo";
import { sanatizedFeed } from '../models/Feed';
const router = Router();

type FeedRequest<V extends keyof FeedPost> = Request<any, any, Pick<FeedPost, V>>;

/* TODO: When the user is deleted it can't get the post. */
/* Get All Feed Post */
router.get('/', async (req: FeedRequest<'id'>, res: Response<FeedPost | object>) => {
    const limit = Number(req.query.limit);

    const result = await Feed.find().populate('user').populate({
        path: 'comments', 
        populate: {
            path: 'user',
            select: 'first_name last_name avatar'
        }
    }).limit(limit ? limit : 0).lean().exec();

    return res.json(((result as unknown) as FeedPost<UserType>[]).map(sanatizedFeed))
})

/* TODO: Implement */
/* Get Single Feed Post */
router.get('/:id', async (req: FeedRequest<'id'>, res: Response<FeedPost | string>) => {
    const { id } = req.body;
    return res.send("a");
})


/* Create New Feed Post */
router.post('/', async (req: Request<any, any, FeedPost>, res: Response<Partial<FeedPost> | object>) => {
    const { caption, user, thumbnail } = req.body;
    const { error } = FeedValidation.validate(req.body);

    if (error) return onErr(res, error.message);

    const feedPost = new Feed({ caption, user });

    try {
        const result = await feedPost.save();

        res.status(200).json({ result });
    } catch (err) {
        res.status(500).json({ error: err });
    }

})

/* Update Exsiting Feed Post */
router.put('/:id', async (req: Request<any, any, FeedPost>, res: Response) => {
    if (!req.params.id || !isValidObjectId(req.params.id)) return onErr(res, 'Valid feed post ID must be specified', 400);

    const { error } = FeedValidation.tailor('put').validate(req.body);
    if (error) return onErr(res, error.message);

    const postId = req.params.id;

    /* Only users with a session can edit their post. */
    if (!req.session?.user?.id) return onErr(res, 'You must be logged in to update a post', 403);

    try {
        const post = await Feed.findById(postId).exec();

        if (!post) return onErr(res, `No post found with ID ${postId}`, 403);

        if (!post.user.equals(req.session.user.id)) return onErr(res, 'You cannot edit another users post', 403);

        /* TODO: I think theres a better way to achive this */
        post.caption = req.body.caption ?? post.caption;
        post.thumbnail = req.body.thumbnail ?? post.thumbnail;

        post.save();
        return res.status(200).json({ result: post });
    } catch (err) {
        const message = MongoError(err as BaseMongoError);
        return res.json({ err });
        // return onErr(res, message, 500);
    }

})

/* Delete an exisitng post */
router.delete('/:id', async (req, res) => {
    if (!req.params.id || !isValidObjectId(req.params.id)) return onErr(res, 'Valid feed post ID must be specified', 400);
    const postId = req.params.id;

    try {
        const response = await Feed.findByIdAndRemove(postId).exec();
        if (!response) return onErr(res, `No feed post by the id of ${postId}`);

        res.status(200).json({ result: response });
    } catch (error) {
        const message = MongoError(error as BaseMongoError);
        return onErr(res, message);
    }
});



export default router;