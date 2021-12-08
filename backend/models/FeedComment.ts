import { Schema, model } from 'mongoose';
import { FeedComment } from 'shared/feed';

const feedComment = new Schema<FeedComment>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})

export default model<FeedComment>('comment', feedComment);