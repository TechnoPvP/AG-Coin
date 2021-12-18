import { Router, Request, Response } from 'express'
import { prisma } from "shared/prisma/main"
import isAdmin from '../middleware/isAdmin';
import SupportValidation from "../validation/supportV"
import { ErrorHandler, onErr } from '../utils/error';
import { Support, Topics } from 'shared/prisma/generated/prisma-client-js';

const router = Router();

// Get all support
router.get("/", async (req: Request, res: Response) => {
    try {
        const supports = await prisma.support.findMany()
        const response = new Map<Topics, Support[]>()
        supports.forEach( item => {
            item.topics.forEach( topic => {
                const result = response.get( topic ) ?? []
                result.push( item )
                response.set( topic, result )
            } )
        } )
        return res
            .status( 200 )
            .json( Object.fromEntries( response ) )
        
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

// Get a single
router.get('/:title/:id', async (req: Request, res: Response) => {
    if ( !req.params.title ) return onErr( res, "no Title provided" )
    if ( !req.params.id ) return onErr( res, "no ID provided" )
    
    try {
        const support = await prisma.support.findFirst({
            where: { title: { equals: req.params.title, mode: "insensitive" }, AND: { id: req.params.id } }
        })

        if (!support) return onErr( res, `No Support found by the id of ${req.params.id} and title of ${req.params.title}` )

        return res
            .status( 200 )
            .json( support )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

// Create a support
router.post('/', isAdmin, async (req: Request, res: Response) => {
    const validate = SupportValidation.tailor("default").validate( req.body )
    if ( validate.error ) return onErr( res, validate.error.message )
    
    try {
        const supports = await prisma.support.create({
            data: {
                ...req.body,
                topics: req.body.topics?.map( (value: string) => value.toLowerCase() )
            },
        })

        return res
            .status( 200 )
            .json( supports )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

// Update a support
router.put('/:id', isAdmin, async (req: Request, res: Response) => {
    if ( !req.params.id ) return onErr( res, "No ID provided." )  
    
    const validate = SupportValidation.tailor('put').validate( req.body )
    if ( validate.error ) return onErr(res, validate.error?.message)

    const data = req.body
    if ( data.topics ) data.topics = {
        set: req.body.topics
    }

    try {
        const support = await prisma.support.update({
            where: { id: req.params.id },
            data,
        })

        return res
            .status( 200 )
            .json( support )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
})

// Delete a support
router.delete( '/:id', isAdmin, async (req: Request, res: Response) => {
    if ( !req.params.id ) return onErr( res, "No ID provided." )

    try {
        const support = await prisma.support.delete({
            where: { id: req.params.id }
        })

        return res
            .status(200)
            .json( { ok: `${support.id} deleted.` } )
    } catch (error) {
        const message = ErrorHandler( error )
        return onErr( res, message )
    }
} )

export default router;
