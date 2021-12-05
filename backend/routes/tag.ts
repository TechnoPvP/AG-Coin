import { Router, Request, Response } from "express"
const router = Router()
import Tag from "../models/Tag"
import MongoError, { BaseMongoError } from "../validation/Mongo"
import { Tag as TagValidation, TagUpdate as TagUpdateValidation } from "../validation/Tag"

const onErr = (res: Response, message: string, status = 400) => res
    .status(status)
    .json({ error: message })

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await Tag.find().exec()
        return res
            .status(200)
            .json( response.map( tag => tag.name ) )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
})

router.post( '/:name', async (req: Request, res: Response) => {
    const input = { name: req.params.name }
    const validation = TagValidation.validate( input )
    if ( validation.error ) return onErr(res, validation.error.message)

    try {
        await Tag.create( input )
        return res
            .status(200)
            .json( { 
                ok: `Created ${input.name}`,
                value: input.name
            } )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
} )

router.delete( '/:name', async (req: Request, res: Response) => {
    const input = { name: req.params.name }
    const validation = TagValidation.validate( input )
    if ( validation.error ) return onErr(res, validation.error.message)

    try {
        const tag = await Tag.findOne( input ).exec()
        if (!tag) return onErr( res, `no tag by the name of ${input.name} can be found.` )
        await tag.delete()

        return res
            .status(200)
            .json( { 
                ok: `Delted ${input.name}`,
                value: input.name
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

router.put( '/', async (req: Request<any, any, PutBody>, res: Response) => {
    const input = req.body
    const validation = TagUpdateValidation.validate( input )
    if ( validation.error ) return onErr(res, validation.error.message)

    try {
        const tag = await Tag.findOne( { name: input.before } ).exec()
        if (!tag) return onErr( res, `no tag by the name of ${input.before} can be found.` )
        tag.name = input.after
        await tag.save()

        return res
            .status(200)
            .json( {
                ok: `Updated ${input.before} to ${input.after}`,
                value: input.after
            } )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr( res, message )
    }
} )

export default router