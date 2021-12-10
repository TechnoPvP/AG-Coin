import mongoose from "mongoose"
import { Tag } from "shared/tag"
import Blog from "./Blog"

const TagSchema = new mongoose.Schema<Tag>({
    name: { type: String, unique: true, lowercase: true }
})

TagSchema.post( 'remove', async function (doc, next) {
    const tag = doc as Tag
    await Blog.updateMany( {
        $pull: {
            tags: tag._id
        }
    } )

    next()
} )

export default mongoose.model('tag', TagSchema)