import  { sanitize as santizeUser } from "../models/User"
import { UserUpdate } from "../validation/User"
import MongoError, { BaseMongoError } from "../validation/Mongo"
import { hash } from "argon2"
import { Router, Request, Response } from "express"
import { User as UserType } from 'shared/user'
import { upload } from "../controller/FileController";
import { deleteObject } from "../controller/AwsController"
import { prisma } from "../prisma/main"
import isSelfOrAdmin from "../middleware/isSelfOrAdmin"
import isUser from "../middleware/isUser"
import store from "../utils/store"
const router = Router()

const onErr = (res: Response, message: string, status = 400) => res.status(status).json({
    error: message
})

// /user/me
router.get("/me", (req: Request, res: Response) => {
    if (req.session.user) return res.status(200).json(req.session.user)

    return onErr(res, "unauthorized", 401)
})

/* Upload User Avatar */
router.post('/avatar', isUser, upload.single('avatar'), async (req: Request, res: Response) => {
    if (!req.file) return onErr(res, 'No file was uploaded.');

    const file = req.file as Express.MulterS3.File;
    const filePath = file.key.split('/');
    const fileName = filePath[filePath.length - 1];
    try {
        const user = await prisma.user.update({ 
            where: { id: req.session.user?.id },
            data: { avatar: fileName }
        })

        req.session.user = santizeUser( user );
        return res.status(200).json( user )
    } catch (err) {
        return onErr(res, 'Server error occured. Please try again later', 500)
    }
});

/* Delete user avatar */
router.delete('/avatar', isUser, async (req: Request, res, Response) => {
    deleteObject(`${req.session.user?.avatar}`, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err })
        }

        return res.status(200).json(req.session.user)
    });
});

// /user/:id
router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt( req.params.id )
    if ( isNaN( id ) ) return onErr(res, "No User ID or User ID must be a number")

    try {
        const user = await prisma.user.findFirst({
            where: { id }
        })
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)
        return res.status(200).json( santizeUser( user ) )
    } catch (error) {
        console.log( error );
        const message = MongoError(error as BaseMongoError)
        return onErr(res, message)
    }
})

// /user/:id
router.delete("/:id", isSelfOrAdmin(), async (req: Request, res: Response) => {
    const id = parseInt( req.params.id )
    if ( isNaN( id ) ) return onErr(res, "No User ID or User ID must be a number")

    try {
        const user = await prisma.user.delete({
            where: { id }
        })

        res.clearCookie("connect.sid")
        store.all( (err, all ) => {
            if (!all) return
            Object.entries( all ).forEach(([sessionID, value]) => {
                if (value.user?.id === user.id) store.destroy( sessionID )
            })
        } )

        if ( req.session.user?.id === id ) req.session?.destroy( console.error )
        return res.status(200).json({
            ok: `User ${user.id} deleted`
        })
    } catch (error) {
        console.log( error );
        const message = MongoError(error as BaseMongoError)
        return onErr(res, message)
    }
})

// /user/:id
router.put("/:id", isSelfOrAdmin(), async (req: Request<any, any, Partial<Omit<UserType, '_id'|'email'>>>, res: Response) => {
    const id = parseInt( req.params.id )
    if ( isNaN( id ) ) return onErr(res, "No User ID or User ID must be a number")
    if ( req.session.user?.id !== id ) return onErr(res, "unauthorized", 401)

    try {
        const validate = UserUpdate.validate(req.body)
        if (validate.error) return onErr(res, validate.error?.message)

        const user = await prisma.user.update( {
            where: { id },
            data: {
                ...req.body,
                password: !req.body.password ? undefined : await hash(req.body.password)
            }
        } )

        req.session.user = santizeUser( user )
        
        return res.status(200).json({
            ok: `Succesfully updated User ${user.id}`
        })
    } catch (error) {
        console.log( error );
        const message = MongoError(error as BaseMongoError)
        return onErr(res, message)
    }
})

export default router