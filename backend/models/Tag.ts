import mongoose from "mongoose"

interface Tag {
    name: string;
}

const TagSchema = new mongoose.Schema<Tag>({
    name: { type: String, unique: true, lowercase: true }
})

export default mongoose.model('tag', TagSchema)