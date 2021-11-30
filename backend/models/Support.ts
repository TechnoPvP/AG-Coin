import { Schema, model } from 'mongoose';

const supportSchema = new Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
      type: String,
      required: true,
      min: 2
    },
    content: {
      type: String,
      required: true,
      min: 10,
    },
    topics: [String],
    views: Number
});


export default model('support', supportSchema);;