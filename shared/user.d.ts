import { Mongoose, Types } from 'mongoose';

export interface User {
    _id: Types.ObjectId;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone?: string;
    avatar?: string;
}

export type SantizedUser = Omit<User, 'password' | '_id'> & { id: Types.ObjectId };


export interface SessionData {
    user?: SantizedUser
}