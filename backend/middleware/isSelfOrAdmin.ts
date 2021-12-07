import { NextFunction, Request, Response } from "express";
import { Role } from "../models/User"

type getIDFunc = (arg0: Request) => string
const getIDbyParams: getIDFunc = (req: Request) => req.params.id

export default (getID: getIDFunc = getIDbyParams) => (req: Request, res: Response, next: NextFunction) => {
    console.log( `${req.session.user?.id}` );
    console.log( getID( req ) );
    if ( req.session.user?.role === Role.ADMIN ) return next()
    if ( `${req.session.user?.id}` === getID( req ) ) return next()
        
    return res
        .status(403)
        .json({ error: "Forbidden" })
}