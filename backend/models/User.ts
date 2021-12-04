import mongoose from "mongoose"

export interface User {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

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
      user?: ReturnType<typeof sanitize>
    }
}


export default mongoose.model( "user", UsersSchema )