import { Tag } from "./tag";
import { User, SantizedUser } from "./user";

export type Difficulty = 'easy' | 'medium' | 'hard';


export type Status = 'publish' | 'draft';

/* TODO: Convert blog date in frontend */
/* TODO: Reimplement Tag type */
export interface Blog<Author = User> {
    title: string;
    body: string;
    tags: string[];
    difficulty: Difficulty;
    created_at: Date | string;
    imgUrl: string;
    status: Status;
    author?: Author;
}

export type SanitizeBlog = Blog<SantizedUser>