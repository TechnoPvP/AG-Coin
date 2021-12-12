import { User } from "../prisma/generated/prisma-client-js"

export const sanitize = (user: User) => ({
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    role: user.role,
    avatar: `https://agcoin.s3.amazonaws.com/user-avatars/${user.avatar ?? 'default_profile_400x400.png'}`
})

export type SantizedUser = ReturnType< typeof sanitize >

declare module 'express-session' {
    interface SessionData {
        user?: SantizedUser
    }
}