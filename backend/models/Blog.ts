import mongoose from "mongoose";
import { BlogPost } from 'shared/blog';

const BlogSchema = new mongoose.Schema<BlogPost>({
    title: { type: String, required: true },
    date: String,
    body: String,
    imgUrl: String,
    difficulty: String,
    tags: Array
});


export default mongoose.model('blog', BlogSchema);
