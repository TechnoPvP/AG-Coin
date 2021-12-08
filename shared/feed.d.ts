import { Types } from 'mongoose';
import { User } from './user';

export interface FeedComment {
    id: Types.ObjectId;
    postId: Types.ObjectId
    user: Types.ObjectId
    content: string
    replies: FeedComment
}

export interface FeedPost<T = Types.ObjectId> {
    id: Types.ObjectId
    user: T;
    caption: string
    thumbnail?: string;
    comments?: Array<Types.ObjectId>
}