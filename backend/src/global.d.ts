import { UserEntity } from "./users/entities/user.entity"

declare module 'express-session' {
    interface SessionData {
        user?: UserEntity
    }
}