import { Schema, model } from 'mongoose';
import { FeedComment } from 'shared/feed';
import { sanitize } from './User';
import { User } from 'shared/user';
import idValidtor from "mongoose-id-validator"

const feedComment = new Schema<FeedComment>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'feed',
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true })

feedComment.plugin( idValidtor )

export const sanitizeComment = (comment: FeedComment<User>) => {
    return {
        ...comment,
        user: sanitize(comment.user),
    }
}

export default model<FeedComment>('comment', feedComment);