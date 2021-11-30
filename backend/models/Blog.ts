import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
    title: String,
    difficulty: String,
    date: String,
    body: String,
    tags: Array
});


export default mongoose.model('blog', BlogSchema);