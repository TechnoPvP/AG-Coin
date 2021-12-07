import mongoose, { SchemaDefinition } from "mongoose"
import idValidtor from "mongoose-id-validator"
import { sanitize as sanitizeUser } from "./User";
import { Tag } from "./Tag";
import type { User } from "./User";

enum Difficulty {
    "EASY",
    "MEDIUM",
    "HARD",
}

enum Status {
    "PUBLISH",
    "DRAFT"
}

export interface Blog {
    _id: mongoose.Types.ObjectId;
    title: string;
    body: string;
    tags: Tag[];
    author: User;
    difficulty: Difficulty;
    created_at: Date;
    status: Status;
}

const BlogSchema = new mongoose.Schema<SchemaDefinition<Blog>>({
    title: String,
    author: { type: mongoose.Types.ObjectId, ref: "user" },
    difficulty: {
        type: String,
        enum: ["EASY", "MEDIUM", "HARD"],
        default: "EASY",
        uppercase: true,
    },
    body: String,
    tags: {
        type: [mongoose.Types.ObjectId],
        ref: "tag",
    },
    created_at: { type: Date, required: true, default: Date.now },
    status: { type: String, enum: ["DRAFT", "PUBLISH"], uppercase: true }
});

BlogSchema.plugin( idValidtor )

export const sanitize = (blog: Blog) => ({
    ...blog,
    author: sanitizeUser( blog.author )
})

export default mongoose.model('blog', BlogSchema);
