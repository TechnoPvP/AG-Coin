import type { GetSession } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import User from "./user";

export const handle = sequence(User)

export const getSession: GetSession = (req) => {
    if (req.locals.user) req.locals.user.name = `${req.locals.user.first_name} ${req.locals.user.last_name}`

    return {
        user: req.locals.user,
    }
}