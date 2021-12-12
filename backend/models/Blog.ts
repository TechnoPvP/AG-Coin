import mongoose, { SchemaDefinition } from "mongoose"
import idValidtor from "mongoose-id-validator"
import { Blog } from "shared/blog"

const BlogSchema = new mongoose.Schema<SchemaDefinition<Blog>>({
    title: String,
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

export default mongoose.model('blog', BlogSchema);
