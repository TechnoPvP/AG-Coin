import { NextFunction, Request, Response } from "express";
import { Role } from "../models/User";

export default (req: Request, res: Response, next: NextFunction) => {
    if ( req.session.user?.role != Role.ADMIN ) return res
        .status(403)
        .json({ error: "Forbidden" })
        
    next()
}