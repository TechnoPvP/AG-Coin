import User, { sanitize, sanitize as santizeUser } from "../models/User"
import mongoose from "mongoose"
import { UserUpdate } from "../validation/User"
import MongoError, { BaseMongoError } from "../validation/Mongo"
import { hash } from "argon2"
import { Router, Request, Response } from "express"
import store from "../utils/store"
import isUser from "../middleware/isUser"
import { SessionData } from "express-session"
import { User as UserType } from 'shared/user'
import { upload } from "../controller/FileController";
import { deleteObject } from "../controller/AwsController"
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
        const user = await User.findByIdAndUpdate(req.session.user?.id, { avatar: fileName }, { returnOriginal: false }).exec();
        
        if (!user) return onErr(res, 'User not found');
        
        req.session.user = sanitize(user);
        return res.status(200).json(user)
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
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) return onErr(res, "No user ID provided")
    const _id = new mongoose.Types.ObjectId(req.params.id)

    try {
        const user = await User.findOne({ _id }).lean().exec()
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)
        return res.status(200).json( santizeUser( user as UserType ) )
    } catch (error) {
        const message = MongoError(error as BaseMongoError)
        return onErr(res, message)
    }
})

// /user/:id
router.delete("/:id", isSelfOrAdmin(), async (req: Request, res: Response) => {
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) return onErr(res, "No user ID provided")
    const _id = new mongoose.Types.ObjectId(req.params.id)

    try {
        const user = await User.findOne({ _id }).exec()
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)
        
        await user.delete()
        res.clearCookie("connect.sid")
        store.all((err, sessions) => {
            type sessionType = { _id: string; expires: Date; session: SessionData }
            const all = (sessions as unknown) as sessionType[]
            all.forEach(({ session, _id }) => {
                if (`${session.user?.id}` === user.id) store.destroy(_id)
            })
        })

        if ( `${req.session.user?.id}` === req.params.id ) req.session?.destroy( console.error )
        return res.status(200).json({
            ok: `User ${user.id} deleted`
        })
    } catch (error) {
        const message = MongoError(error as BaseMongoError)
        return onErr(res, message)
    }
})

// /user/:id
router.put("/:id", isSelfOrAdmin(), async (req: Request<any, any, Partial<Omit<UserType, '_id'|'email'>>>, res: Response) => {
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) return onErr(res, "No user ID provided")
    const _id = new mongoose.Types.ObjectId(req.params.id)

    try {
        const user = await User.findOne({ _id }).exec()
        if (!user) return onErr(res, `No User by the id of ${req.params.id}`)

        if (`${req.session.user?.id}` !== user.id) return onErr(res, "unauthorized", 401)

        const validate = UserUpdate.validate(req.body)
        if (validate.error) return onErr(res, validate.error?.message)

        // Make sure this covers the whole user object (other than email & _id)
        user.password = !req.body.password ? user.password : await hash(req.body.password)
        user.first_name = req.body.first_name ?? user.first_name
        user.last_name = req.body.last_name ?? user.last_name

        await user.save()
        req.session.user = santizeUser( user as UserType )
        
        return res.status(200).json({
            ok: `Succesfully updated User ${user.id}`
        })
    } catch (error) {
        const message = MongoError(error as BaseMongoError)
        return onErr(res, message)
    }
})

export default router