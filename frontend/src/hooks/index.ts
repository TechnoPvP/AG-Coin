import type { GetSession } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import User from "./user";

export const handle = sequence(User)

export const getSession: GetSession = (req) => {
    return {
        user: req.locals.user,
    }
}