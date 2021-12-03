import { Router, Request, Response, NextFunction } from "express"
import User from "../models/User"
import { Register, Login } from "../validation/Auth"
import { hash, verify } from "argon2"
import * as cookie from 'cookie';

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
            first: string;
            last: string;
        };
    }
}

const getSessionUser = (user: any) => ({
    id: user._id,
    email: user.email,
    first: user.first_name,
    last: user.last_name,
})

// /auth/register
router.post("/register", async (req: Request<any, any, registerBody>, res: Response) => {
    let validation = Register.validate(req.body)
    if (validation.error) return onErr(res, validation.error.message)

    const { email, password, first_name, last_name } = req.body
    const hashPassword = await hash(password);

    try {
        const user = await User.create({
            email,
            password: hashPassword,
            first_name,
            last_name,
        });

        req.session.user = getSessionUser(user)
        return res.status(201).json(req.session.user)
    } catch (err) {
        return onErr(res, err as string)
    }
})

const setCookie = ((req: Request, res: Response, next: NextFunction) => {
    req.session.user = {
        id: '61a5cfc6d2adf4ea068efc55',
        email: 'adam@webrevived.com',
        first: 'Adam',
        last: 'Ghowiba'
    }
    next();
});

router.post('/', async (req: Request, res: Response) => {

    if (req.session.user) {
        res.status(200).json({ person: req.session.user ?? 'none' });
        console.log(req.session.user);
        return;
    }
    res.status(500).json({ error: 'User is not authorized' });
})



// /auth/login
router.post("/login", async (req: Request<any, any, loginBody>, res: Response) => {
    req.session.user = {
        id: '61a5cfc6d2adf4ea068efc55',
        email: 'adam@webrevived.com',
        first: 'Adam',
        last: 'Ghowiba'
    }
    res.status(200).json({ result: 'Cookie has been set' });
    // try {
    //     const user = await User.findOne({ email: req.body.email }).exec()
    //     if (!user) {
    //         return onErr(res, `${req.body.email} does not exsist.`, 401)
    //     }
    //     const result = await verify(user.password, req.body.password)
    //     if (!result) return onErr(res, "Incorrect email or password", 401)

    //     req.session.user = getSessionUser(user)
    //     return res.status(200).json({ redirect: '/dashboard/home', result: req.session.user })
    // } catch (err) {
    //     return onErr(res, err as string)
    // }
})

// /auth/logout
router.get("/logout", (req: Request, res: Response) => {
    req.session.destroy(console.log)
    res.clearCookie('connect.sid');

    return res.status(200).json({
        ok: "User Logged out"
    })
})


export default router