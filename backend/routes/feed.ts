import { Router, Request, Response, NextFunction } from "express";
import { FeedPost, FeedComment } from "shared/feed";
import Feed from "../models/Feed";
const router = Router();

type FeedRequest = Request<any, any, Pick<FeedPost, 'id'>>;
type FeedResponse = Response<Partial<FeedPost>>;

type FeedRes<T> = Response<Pick<T, keyof T> | string>;


router.get('/', (req, res: FeedRes<FeedPost>) => {
    return res.send('a');
})

router.post('/', (req: FeedRequest, res: Response<Partial<FeedPost>>) => {
    const { id } = req.body;


})

export default router;