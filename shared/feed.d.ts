import { Types } from 'mongoose';

export interface FeedComment<T = Types.ObjectId> {
    _id: Types.ObjectId;
    postId: Types.ObjectId
    user: T;
    content: string
    replies: FeedComment
}

export interface FeedPost<T = Types.ObjectId> {
    _id: Types.ObjectId
    user: T;
    caption: string
    thumbnail?: string;
}