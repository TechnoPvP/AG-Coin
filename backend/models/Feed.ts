import { Schema, model } from 'mongoose';
import { FeedPost, FeedComment } from 'shared/feed';
import { User } from 'shared/user';
import { sanitize } from '../models/User';
import { sanitizeComment } from './FeedComment';

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
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
})

export const sanatizedFeed = (feed: FeedPost<User>) => {
    return {
        ...feed,
        comments: feed.comments?.map(sanitizeComment),
        user: sanitize(feed.user),
    }
}

export default model<FeedPost>('feed', feedSchema);