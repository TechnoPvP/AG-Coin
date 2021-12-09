import { Tag } from "./tag";
import { User, SantizedUser } from "./user";

declare enum Difficulty {
    "EASY",
    "MEDIUM",
    "HARD",
}

declare enum Status {
    "PUBLISH",
    "DRAFT"
}

export interface Blog<Author = User> {
    title: string;
    body: string;
    tags: Tag[];
    author: Author;
    difficulty: Difficulty;
    created_at: Date;
    status: Status;
}

export type SanitizeBlog = Blog<SantizedUser>