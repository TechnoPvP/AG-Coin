const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    difficulty: String,
    date: String,
    body: String,
    tags: Array
});


module.exports = mongoose.model('post', postSchema);;