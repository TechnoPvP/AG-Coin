import { Router, Request, Response } from "express"
import User, { sanitize as sanitizeUser, User as UserType } from "../models/User"
import { Register, Login } from "../validation/Auth"
import { hash, verify } from "argon2"
import MongoError, { BaseMongoError } from "../validation/Mongo"
const router = Router()

const onErr = (res: Response, error: string, status = 400) => res
    .status(status)
    .json({ error })

// /auth/register
router.post("/register", async (req: Request<any, any, Omit<UserType, '_id'>>, res: Response) => {
    let validation = Register.validate(req.body)
    if (validation.error) return onErr(res, validation.error.message)

    const { email, password, first_name, last_name } = req.body
    const hashPassword = await hash(password);

    try {
        const user = await User.create({
            email,
            password: hashPassword,
            first_name: first_name,
            last_name: last_name,
        });

        req.session.user = sanitizeUser( user as UserType )
        return res.status(201).json(req.session.user)
    } catch (err) {
        const message = MongoError(err as BaseMongoError)
        return onErr(res, message)
    }
})

type loginBody = Pick<UserType, 'email' | 'password'>;
// /auth/login
router.post("/login", async (req: Request<any, any, loginBody>, res: Response) => {
    if (req.session?.user ?? false) return res.status(200).json(req.session.user)

    let validation = Login.validate(req.body)
    if (validation.error) return onErr(res, validation.error.message)

    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec() as UserType | null
        if (!user) return onErr(res, `User not found by ${req.body.email}`, 401);

        const result = await verify(user.password, req.body.password);
        if (!result) return onErr(res, "Incorrect Password", 401);

        req.session.user = sanitizeUser(user);
        return res.status(200).json(req.session.user)
    } catch (err) {
        const message = MongoError(err as BaseMongoError)
        return onErr(res, message)
    }
})

// /auth/logout
router.get("/logout", (req: Request, res: Response) => {
    req.session.destroy(console.log)
    res.clearCookie("connect.sid")

    return res.status(200).json({
        ok: "User Logged out"
    })
})

export default router