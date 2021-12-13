import { User } from "shared/prisma/generated/prisma-client-js"

export const sanitize = (user: User) => ({
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    role: user.role,
    avatar: user.avatar
})

export type SantizedUser = ReturnType< typeof sanitize >

declare module 'express-session' {
    interface SessionData {
        user?: SantizedUser
    }
}