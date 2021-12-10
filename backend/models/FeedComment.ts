import { Schema, model } from 'mongoose';
import { FeedComment } from 'shared/feed';
import { sanitize } from './User';
import { User } from 'shared/user';
import Feed from './Feed'

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

feedComment.post( "remove", async function (doc, next) {
    const comment = doc as FeedComment
    await Feed.updateMany( { $pull: {
        comments: comment._id
    } } )

    next()
} )

export const sanitizeComment = (comment: FeedComment<User>) => {
    return {
        ...feedComment,
        user: sanitize(comment.user),
    }
}

export default model<FeedComment>('comment', feedComment);