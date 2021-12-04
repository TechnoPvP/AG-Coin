export type Difficulty = 'easy' | 'medium' | 'advanced';

export interface BlogPost {
    title: string
    imgUrl: string
    difficulty: Difficulty,
    date: string,
    body: string,
    tags: Array<string>
}