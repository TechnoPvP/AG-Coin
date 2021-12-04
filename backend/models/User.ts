import mongoose from "mongoose"
import { User } from 'shared/user';

const UsersSchema = new mongoose.Schema<User>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    first_name: { type: String, required: true, },
    last_name: { type: String, required: true, },
})

export const sanitize = (user: User) => ({
    id: user._id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
})

declare module 'express-session' {
    interface SessionData {
        user?: Omit<User, 'password' | '_id'> & { id: mongoose.Types.ObjectId }
    }
}


export default mongoose.model("user", UsersSchema)