import { Router, Request, Response } from "express"
import { Blog as BlogValidation } from "../validation/Blog"
import isAdmin from "../middleware/isAdmin";
import { prisma } from "shared/prisma/main";
import { onErr, ErrorHandler } from "../utils/error"
import { v4 } from "uuid"
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const blogs = await prisma.blog.findMany({ 
            include: { 
                tags: true
        } })
        if (!blogs) return onErr(res, "Blogs Model don't exist", 500)
        return res.status(200).json( blogs )
    } catch (error) {
        const message = ErrorHandler( error )
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
        const message = ErrorHandler(error)
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
                status: req.body.status?.toUpperCase() ?? undefined,
                thumbnail: req.body.thumbnail ?? `https://avatars.dicebear.com/api/identicon/${v4()}.svg?size=500`
            },
        })
        
        return res
            .status(200)
            .json( blog )
    } catch (err: any) {
        const message = ErrorHandler( err )
        return onErr( res, message )
    }
});

router.put('/:id', isAdmin, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if ( isNaN(id) ) return onErr( res, "No Blog ID provided or/and Blog ID must a number" )

    const validate = BlogValidation.validate( { ...req.body, difficulty: req.body.difficulty?.toUpperCase() ?? undefined } )
    if ( validate.error ) return onErr( res, validate.error.message ) 

    try {
        const blog = await prisma.blog.update({
            where: { id },
            data: {
                ...req.body,
                tags: {
                    set: req.body.tags ?? []
                }
            },
            include: { tags: true }
        })

        return res
            .status( 200 )
            .json( blog )
    } catch (err) {
        const message = ErrorHandler( err )
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
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

export default router
