import type { GetSession } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import User from "./user";
import type { SessionData } from 'shared/user';

export const handle = sequence(User)

export const getSession: GetSession = (req): SessionData => {
    if (req.locals.user) req.locals.user.name = `${req.locals.user.first_name} ${req.locals.user.last_name}`

    return {
        user: req.locals.user,
    }
}
