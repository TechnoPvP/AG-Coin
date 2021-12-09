import { Router, Request, Response } from "express"
import MongoError, { BaseMongoError } from "../validation/Mongo";
import { Blog as BlogValidation } from "../validation/Blog"
import isAdmin from "../middleware/isAdmin";
import Blogs from "../models/Blog"
import { Blog } from "shared/blog" 
const router = Router();

const onErr = (res: Response, message: string, status = 400) => res
    .status( status )
    .json({ error: message })

router.get('/', async (req: Request, res: Response) => {
    try {
        const blogs = await Blogs
            .find()
            .populate('tags')
            .lean()
            .exec() as Blog[]

        if (!blogs) return onErr(res, "Blogs Model don't exist", 500)
        return res.status(200).json( blogs )
    } catch (error) {
        console.log(error);
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

router.get('/:slug', async (req: Request, res: Response) => {
    const slug = req.params.slug;
    try {
        const blog = await Blogs
            .findOne({ _id: slug })
            .populate('tags')
            .lean()
            .exec() as Blog;
        
        if (!blog) onErr(res, `No Blog found by the id of ${slug}` )

        return res
            .status(200)
            .json( blog )
    } catch (error) {
        const message = MongoError(error as BaseMongoError)
        return onErr( res, message )
    }
});

router.post('/', isAdmin, async (req: Request, res: Response) => {
    const validate = BlogValidation.validate( req.body )
    if ( validate.error ) return onErr( res, validate.error.message ) 

    try {
        const blog = await Blogs.create( req.body )
        
        return res
            .status(200)
            .json( blog )
    } catch (err: any) {
        if (err instanceof Error) return onErr( res, err.toString() )
        
        const message = MongoError( err as BaseMongoError )
        return onErr( res, message )
    }
});

router.put('/:slug', isAdmin, async (req: Request, res: Response) => {
    if (!req.params.slug) return onErr(res, "No blog id provided")

    const validate = BlogValidation.validate( { ...req.body, difficulty: req.body.difficulty.toUpperCase() ?? undefined } )
    if ( validate.error ) return onErr( res, validate.error.message ) 

    try {
        const blog = await Blogs
            .findById( req.params.slug )
            .exec()

        if (!blog) return onErr(res, `No blog was found by the id of ${req.params.slug}`)

        blog.title = req.body.title ?? blog.title
        blog.difficulty = req.body.difficulty ?? blog.difficulty
        blog.body = req.body.body ?? blog.body
        blog.tags = req.body.tags ?? blog.tags
        blog.status = req.body.status ?? blog.status

        await blog.save()

        return res
            .status( 200 )
            .json( blog )
    } catch (err) {
        const message = MongoError( err as BaseMongoError )
        return onErr( res, message )
    }
});

router.delete('/:slug', isAdmin, async (req: Request, res: Response) => {
    if (!req.params.slug) return onErr(res, "No blog id provided")

    try {
        const blog = await Blogs.findById( req.params.slug ).exec()
        if (!blog) return onErr(res, `No Blog found by the id of ${req.params.slug}`)
        await blog.delete()

        return res
            .status(200)
            .json({
                ok: `${req.params.slug} deleted.`
            })
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

export default router
