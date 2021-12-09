import { Types } from 'mongoose';
import { User } from './user';

export interface FeedComment<T = Types.ObjectId> {
    id: Types.ObjectId;
    postId: Types.ObjectId
    user: T;
    content: string
    replies: FeedComment
}

export interface FeedPost<T = Types.ObjectId> {
    id: Types.ObjectId
    user: T;
    caption: string
    thumbnail?: string;
    comments?: Array<FeedComment<T>>
}