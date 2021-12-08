import mongoose from "mongoose";

export interface Tag {
    _id: mongoose.Types.ObjectId;
    name: string;
}
