import { Schema, model } from 'mongoose';
import { FeedPost } from 'shared/feed';
import { User } from 'shared/user';
import { sanitize } from '../models/User';

const feedSchema = new Schema<FeedPost>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    thumbnail: String,
}, { timestamps: true })

export const sanatizedFeed = (feed: FeedPost<User>) => {
    return {
        ...feed,
        user: sanitize(feed.user),
    }
}

export default model<FeedPost>('feed', feedSchema);