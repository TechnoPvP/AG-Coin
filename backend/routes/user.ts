import User, { sanitize as santizeUser, User as UserType } from "../models/User"
import mongoose from "mongoose"
import { UserUpdate } from "../validation/User"
import MongoError, { BaseMongoError } from "../validation/Mongo"
import { hash } from "argon2"
import { Router, Request, Response } from "express"
const router = Router()

const onErr = (res: Response, message: string, status = 400) => res.status(status).json({
    error: message
})

// /user/me
router.get("/me", (req: Request, res: Response) => {
    if ( req.session.user ) return res.status(200).json( req.session.user )
    return onErr( res, "unauthorized", 401 )
})

// /user/:id
router.get('/:id', async (req: Request, res: Response) => {
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) return onErr(res, "No user ID provided")
    const _id = new mongoose.Types.ObjectId( req.params.id )

    try {
        const user = await User.findOne({ _id }).exec()
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)
    
        return res.status(200).json( santizeUser( user ) )
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr(res, message)
    }
})

// /user/:id
router.delete("/:id", async (req: Request, res: Response) => {
    if ( !req.session.user ) return onErr(res, "unauthorized", 401)
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) return onErr(res, "No user ID provided")
    const _id = new mongoose.Types.ObjectId( req.params.id )
    
    try {
        const user = await User.findOne({ _id }).exec()
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)
    
        if ( `${req.session.user?.id}` !== user.id ) return onErr(res, "unauthorized", 401)
        
        await user.delete()
        // TODO: Work out a legitmate way to destroy all the user active sessions
        req.session.destroy( console.error )
    
        res.clearCookie("connect.sid")
        return res.status(200).json({
            ok: `User ${user.id} deleted`
        })
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr(res, message)
    }
})

// /user/:id
router.put("/:id", async (req: Request<any, any, Partial<Omit<UserType, '_id'|'email'>>>, res: Response) => {
    if ( !req.session.user ) return onErr(res, "unauthorized", 401)
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) return onErr(res, "No user ID provided")
    const _id = new mongoose.Types.ObjectId( req.params.id )

    try {
        const user = await User.findOne({ _id }).exec()
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)
    
        if ( `${req.session.user?.id}` !== user.id ) return onErr(res, "unauthorized", 401)
        
        const validate = UserUpdate.validate( req.body )
        if ( validate.error ) return onErr(res, validate.error?.message) 
    
        // Make sure this covers the whole user object (other than email & _id)
        user.password = !req.body.password ? user.password : await hash(req.body.password)
        user.first_name = req.body.first_name ?? user.first_name
        user.last_name = req.body.last_name ?? user.last_name
    
        await user.save()
        req.session.user = santizeUser( user )
        
        return res.status(200).json({
            ok: `Succesfully updated User ${user.id}`
        })
    } catch (error) {
        const message = MongoError( error as BaseMongoError )
        return onErr(res, message)
    }
})



export default router