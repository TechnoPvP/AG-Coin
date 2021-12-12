import { Router, Request, Response } from "express"
import MongoError, { BaseMongoError } from "../validation/Mongo";
import { Blog as BlogValidation } from "../validation/Blog"
import isAdmin from "../middleware/isAdmin";
import { prisma } from "../prisma/main";
const router = Router();

const onErr = (res: Response, message: string, status = 400) => res
    .status( status )
    .json({ error: message })

router.get('/', async (req: Request, res: Response) => {
    try {
        const blogs = await prisma.blog.findMany({ 
            include: { 
                tags: true
        } })
        if (!blogs) return onErr(res, "Blogs Model don't exist", 500)
        return res.status(200).json( blogs )
    } catch (error) {
        console.log(error);
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if ( isNaN(id) ) return onErr( res, "No Blog ID provided or/and Blog ID must a number" )
    
    try {
        const blog = await prisma.blog.findFirst({
            where: { id },
            include: { 
                tags: true
            }
        })
        
        if (!blog) onErr(res, `No Blog found by the id of ${id}` )

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
        const blog = await prisma.blog.create({
            data: {
                ...req.body,
                status: req.body.status?.toUpperCase() ?? undefined
            },
        })
        
        return res
            .status(200)
            .json( blog )
    } catch (err: any) {
        const message = MongoError( err as BaseMongoError )
        return onErr( res, message )
    }
});

router.put('/:id', isAdmin, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if ( isNaN(id) ) return onErr( res, "No Blog ID provided or/and Blog ID must a number" )

    // const validate = BlogValidation.validate( { ...req.body, difficulty: req.body.difficulty?.toUpperCase() ?? undefined } )
    // if ( validate.error ) return onErr( res, validate.error.message ) 

    try {
        const blog = await prisma.blog.update({
            where: { id },
            data: {
                ...req.body,
                tags: {
                    connectOrCreate: req.body.tags?.map( (tag: any) => ({
                        create: {
                            name: tag.name
                        },
                        where: {
                            name: tag.name
                        }
                    }) ) ?? []
                }
            },
            include: { tags: true }
        })

        return res
            .status( 200 )
            .json( blog )
    } catch (err) {
        const message = MongoError( err as BaseMongoError )
        return onErr( res, message )
    }
});

router.delete('/:id', isAdmin, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if ( isNaN(id) ) return onErr( res, "No Blog ID provided or/and Blog ID must a number" )

    try {
        const blog = await prisma.blog.delete({
            where: { id },
        })

        return res
            .status(200)
            .json({
                ok: `${blog.id} deleted.`
            })
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

export default router
