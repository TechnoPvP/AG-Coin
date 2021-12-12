import { Router, Request, Response } from "express"
import { sanitize as sanitizeUser } from "../models/User"
import { Register, Login } from "../validation/Auth"
import { hash, verify } from "argon2"
import MongoError, { BaseMongoError } from "../validation/Mongo"
import { onErr } from "../utils/error"
import { prisma } from "../prisma/main"
import { User } from "../prisma/generated/prisma-client-js"
const router = Router()

// /auth/register
router.post("/register", async (req: Request<any, any, Omit<User, '_id'>>, res: Response) => {
    let validation = Register.validate(req.body)
    if (validation.error) return onErr(res, validation.error.message)

    const { email, password, first_name, last_name } = req.body
    const hashPassword = await hash(password);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashPassword,
                first_name,
                last_name,
            }
        })

        // req.session.user = sanitizeUser( user )
        return res.status(201).json(sanitizeUser( user ))
    } catch (err) {
        console.log(err);
        const message = MongoError(err as BaseMongoError)
        return onErr(res, message)
    }
})

type loginBody = Pick<User, 'email' | 'password'>;
// /auth/login
router.post("/login", async (req: Request<any, any, loginBody>, res: Response) => {
    if (req.session?.user ?? false) return res.status(200).json(req.session.user)

    let validation = Login.validate(req.body)
    if (validation.error) return onErr(res, validation.error.message)

    try {
        let user = await prisma.user.findFirst( { where: { email: req.body.email } } )
        if (!user) return onErr(res, `User not found by ${req.body.email}`, 401);

        const result = await verify(user.password, req.body.password);
        if (!result) return onErr(res, "Incorrect Password", 401);

        req.session.user = sanitizeUser(user);
        return res.status(200).json(req.session.user)
    } catch (err) {
        console.log( err );
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