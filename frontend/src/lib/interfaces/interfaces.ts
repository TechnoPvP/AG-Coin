import type {difficulty} from '$lib/interfaces/types';

export interface SliderContent {
    imgSrc: string
    title: string
    desc: string
}

export interface PostData {
    date: Date | string
    time: string
    source: string
    title: string
    body: string
}

export interface BlogPost {
    title: string
    imgUrl: string
    difficulty: difficulty,
    date: string,
    body: string,
    tags?: Array<string>
}