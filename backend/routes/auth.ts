import { Router, Request, Response } from "express"
import User from "../models/User"
import { Register, Login } from "../validation/Auth"
import { hash, verify } from "argon2"
import MongoError, { BaseMongoError } from "../validation/Mongo"
const router = Router()

const onErr = (res: Response, error: string, status = 400) => res
    .status(status)
    .json({ error })

interface registerBody {
    email: string,
    password: string,
    first_name: string,
    last_name: string,    
}

interface loginBody {
    email: string,
    password: string,
}

declare module 'express-session' {
    interface SessionData {
      user: {
          id: any;
          email: string;
          first_name: string;
          last_name: string;
      };
    }
}

const getSessionUser = (user: any) => ({
    id: user._id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
})

// /auth/register
router.post("/register", async (req: Request<any, any, registerBody>, res: Response) => {
    let validation = Register.validate( req.body )
    if ( validation.error ) return onErr( res, validation.error.message )
    
    const { email, password, first_name, last_name } = req.body
    const hashPassword = await hash(password);

    try {
        const user = await User.create({
            email,
            password: hashPassword,
            first_name: first_name,
            last_name: last_name,
        });

        req.session.user = getSessionUser(user)
        return res.status(201).json(req.session.user)
    } catch (err) {
        const message = MongoError( err as BaseMongoError )
        return onErr(res, message)
    }
} )

// /auth/login
router.post("/login", async (req: Request<any, any, loginBody>, res: Response) => {
    if ( req.session?.user ?? false ) return res.status(201).json(req.session.user)

    let validation = Login.validate( req.body )
    if ( validation.error ) return onErr( res, validation.error.message )

    try {
        const user = await User.findOne({ email: req.body.email }).exec()
        if ( !user ) return onErr(res, `User not found by ${req.body.email}`, 401)
        
        const result = await verify( user.password, req.body.password )
        if ( !result ) return onErr(res, "Incorrect Password", 401)

        req.session.user = getSessionUser( user )
        return res.status(200).json( req.session.user )
    } catch (err) {
        const message = MongoError( err as BaseMongoError )
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

// /auth/me
router.get("/me", (req: Request, res: Response) => {
    if ( req.session.user ) return res.status(200).json( req.session.user )
    return onErr( res, "unauthorized", 401 )
})

export default router