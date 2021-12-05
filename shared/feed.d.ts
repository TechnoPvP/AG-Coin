import { Types } from 'mongoose';

export interface FeedComment {
    id: Types.ObjectId
    user: Types.ObjectId
    content: string
    replies: FeedComment
}

export interface FeedPost {
    id: Types.ObjectId
    user: Types.ObjectId
    caption: string
    thumbnail?: string;
    comments?: Array<FeedComment>
}