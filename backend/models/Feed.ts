import { Schema, model } from 'mongoose';
import { FeedPost, FeedComment } from 'shared/feed';

const feedSchema = new Schema<FeedPost>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    thumbnail: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

export default model<FeedPost>('feed', feedSchema);