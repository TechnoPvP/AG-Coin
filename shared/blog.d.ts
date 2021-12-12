import { Tag } from "./tag";

declare enum Difficulty {
    "EASY",
    "MEDIUM",
    "HARD",
}

declare enum Status {
    "PUBLISH",
    "DRAFT"
}

export interface Blog {
    title: string;
    body: string;
    tags: Tag[];
    difficulty: Difficulty;
    created_at: Date;
    status: Status;
}