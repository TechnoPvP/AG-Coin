import { Schema, model } from 'mongoose';

const feedSchema = new Schema({
    user: {
        type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    thumbnail: String,
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            required: true
        },
        content: String,
    }]

})