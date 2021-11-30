import { Router, Request, Response, NextFunction } from "express"
import User from "../models/User"
const router = Router()

// /users/
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    console.log( req.body );
    // const result = await User.create({

    // })
} )

export default router
//