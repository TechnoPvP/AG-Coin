import type { GetSession } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import User from "./user";

export const handle = sequence(User)

export const getSession: GetSession = (req) => {
    console.log( req.locals.user );
    return {
        user: req.locals.user,
    }
}