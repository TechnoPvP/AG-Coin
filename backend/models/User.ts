import mongoose, { SchemaDefinition } from "mongoose"

export enum Role {
    "ADMIN" = "ADMIN",
    "DEFAULT" = "DEFAULT"
}

export interface User {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: Role;
}

const UsersSchema = new mongoose.Schema<SchemaDefinition<User>>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    first_name: { type: String, required: true, },
    last_name: { type: String, required: true, },
    role: { type: String, enum: ["ADMIN", "DEFAULT"], default: "DEFAULT" },
})

export const sanitize = (user: User) => ({
    id: user._id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    role: user.role
})

declare module 'express-session' {
    interface SessionData {
      user?: ReturnType<typeof sanitize>
    }
}

export default mongoose.model( "user", UsersSchema )