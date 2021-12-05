import mongoose, { PopulatedDoc, SchemaDefinition } from "mongoose"
import idValidtor from "mongoose-id-validator"
import { sanitize as sanitizeUser } from "./User";
import { Tag } from "./Tag";
import type { User } from "./User";

enum Difficulty {
    "EASY",
    "MEDIUM",
    "HARD",
}

export interface Blog {
    title: string;
    body: string;
    tags: Tag[];
    author: User;
    difficulty: Difficulty;
    created_at: Date;
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
    created_at: { type: Date, required: true, default: Date.now }
});

BlogSchema.plugin( idValidtor )

export const sanitize = (blog: Blog) => ({
    ...blog,
    author: sanitizeUser( blog.author )
})

export default mongoose.model('blog', BlogSchema);
