import { Schema, model } from 'mongoose';
import { FeedPost } from 'shared/feed';

const feedSchema = new Schema<FeedPost>({
    user: {
        type: [{ type: Schema.Types.ObjectId, ref: 'user' }],
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    thumbnail: String,
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            required: true
        },
        content: String,
    }],
})

export default model('feed', feedSchema);