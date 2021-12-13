import { Router, Request, Response } from "express"
import isAdmin from "../middleware/isAdmin"
const router = Router()
import { prisma } from "shared/prisma/main"
import MongoError, { BaseMongoError } from "../validation/Mongo"
import { Tag as TagValidation, TagUpdate as TagUpdateValidation } from "../validation/Tag"

const onErr = (res: Response, message: string, status = 400) => res
    .status(status)
    .json({ error: message })

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await prisma.tag.findMany()
        return res
            .status(200)
            .json( response )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

router.post( '/:name', isAdmin, async (req: Request, res: Response) => {
    const input = { name: req.params.name?.toLowerCase() }
    const validation = TagValidation.validate( input )
    if ( validation.error ) return onErr(res, validation.error.message)

    try {
        const tag = await prisma.tag.create({
            data: { ...input }
        })

        return res
            .status(200)
            .json( { 
                ok: `Created ${input.name}`,
                value: { id: tag.id, name: input.name }
            } )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
} )

router.delete( '/:name', isAdmin, async (req: Request, res: Response) => {
    const input = { name: req.params.name?.toLowerCase() }
    const validation = TagValidation.validate( input )
    if ( validation.error ) return onErr(res, validation.error.message)

    try {
        const tag = await prisma.tag.delete({
            where: { ...input }
        })

        return res
            .status(200)
            .json( { 
                ok: `Delted ${tag.name}`,
                value: tag.name
            } )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
} )

interface PutBody {
    before: string;
    after: string;
}

router.put( '/', isAdmin, async (req: Request<any, any, PutBody>, res: Response) => {
    const input = req.body
    const validation = TagUpdateValidation.validate( input )
    if ( validation.error ) return onErr(res, validation.error.message)

    try {
        const tag = await prisma.tag.update({
            where: { name: input.before },
            data: { name: input.after }
        })

        return res
            .status(200)
            .json( {
                ok: `Updated ${input.before} to ${input.after}`,
                value: tag
            } )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
} )

export default router