import { Router, Request, Response } from "express";
import FeedValidation from "../validation/FeedV";
import { onErr } from "../utils/error";
import MongoError, { BaseMongoError } from "../validation/Mongo";
import { sanatizedFeed } from '../models/Feed';
import isUser from "../middleware/isUser";
import { prisma } from "shared/prisma/main";
import { Feed } from "shared/prisma/generated/prisma-client-js"
const router = Router();

type FeedRequest<V extends keyof Feed> = Request<any, any, Pick<Feed, V>>;

/* Get All Feed Post */
router.get('/', async (req: FeedRequest<'id'>, res: Response<Feed | object>) => {
    const limit = Number(req.query.limit);
    const results = await prisma.feed.findMany({ include: { 
        user: true, 
        comments: { 
            include: { user: true } } 
        } 
    })
    
    return res.json( results.map( sanatizedFeed ) )
})

/* TODO: Implement */
/* Get Single Feed Post */
router.get('/:id', async (req: FeedRequest<'id'>, res: Response<Feed | string>) => {
    const { id } = req.body;
    return res.send("a");
})

/* Create New Feed Post */
router.post('/', isUser, async (req: Request<any, any, Omit<Feed, "userId" | "id" | "created_at">>, res: Response<Partial<Feed> | object>) => {
    const { error } = FeedValidation.validate(req.body);
    if (error) return onErr(res, error.message);
    try {
        const feedPost = await prisma.feed.create( {
            data: {
                caption: req.body.caption,
                thumbnail: req.body.thumbnail,
                userId: req.session.user!.id
            }
        } )
        res.status(200).json( feedPost );
    } catch (err) {
        res.status(500).json({ error: err });
    }

})

/* Update Exsiting Feed Post */
router.put('/:id', isUser, async (req: Request<any, any, Feed>, res: Response) => {
    const id = parseInt(req.params.id)
    if ( isNaN( id ) ) return onErr( res, "No Feed Id Provided or/and Feed Id must be an number" )

    const { error } = FeedValidation.validate(req.body);
    if (error) return onErr(res, error.message);

    try {
        const where = { 
            id,
            AND: {
                userId: req.session.user?.id
            } 
        }
        
        await prisma.feed.updateMany({
            where,
            data: {
                caption: req.body.caption,
                thumbnail: req.body.thumbnail
            },
        })

        const post = await prisma.feed.findFirst( { where } )
        if (!post) return onErr( res, "No Post found" )

        return res.status(200).json({ result: post });
    } catch (err) {
        const message = MongoError(err as BaseMongoError);
        return onErr(res, message);
    }

})

/* Delete an exisitng post */
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    if ( isNaN( id ) ) return onErr( res, "No Feed Id Provided or/and Feed Id must be an number" )

    try {
        const response = await prisma.feed.delete( {
            where: { id }
        } )

        res.status(200).json( response );
    } catch (error) {
        const message = MongoError(error as BaseMongoError);
        return onErr(res, message);
    }
});

export default router;