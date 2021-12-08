import mongoose from "mongoose"
import { Tag } from "shared/tag"

const TagSchema = new mongoose.Schema<Tag>({
    name: { type: String, unique: true, lowercase: true }
})

export default mongoose.model('tag', TagSchema)