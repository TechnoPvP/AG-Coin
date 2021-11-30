import { Router, Request, Response } from "express"
import User from "../models/User"
import { hash } from "argon2"
const router = Router()

const onErr = (res: Response, error: string) => res
    .status(503)
    .json({ error })

const stringCount = (value: string, test: RegExp) => value.split("").reduce( (acc, curr) => {
    return acc + (test.test(curr) ? 1 : 0)
}, 0 )

interface body {
    email: string,
    password: string,
    first: string,
    last: string,    
}

type Req =  Request<any, any, body>
const specials = /[!@#$%^&*(),.?":{}|<>]/
const numbers = /[0-9]/

// /users/
router.post( "/", async (req: Req, res: Response) => {
    const { email, password, first, last } = req.body
    
    if (!email) return onErr(res, "Email not found")
    if (!password) return onErr(res, "Password not found")
    if (!first) return onErr(res, "First Name not found")
    if (!last) return onErr(res, "Last Name not found")

    const numberCount = stringCount(password, numbers)
    const specialCount = stringCount(password, specials)

    if (password.length < 5) return onErr(res, "Password must be 5 characters")
    if (password.includes(" ")) return onErr(res, "Password must not contain any spaces")
    if (specialCount === 0) return onErr(res, "Password must contain atleast 1 special character")
    if (numberCount === 0) return onErr(res, "Password must contain atleast 1 digiit")

    const hashPassword = await hash(password);

    console.log( result);
} )


export default router