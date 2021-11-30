import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: String,
    difficulty: String,
    date: String,
    body: String,
    tags: Array
});


export default model('post', postSchema);;