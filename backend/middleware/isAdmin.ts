import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    if ( req.session.user?.role != "ADMIN" ) return res
        .status(403)
        .json({ error: "Forbidden" })
        
    next()
}