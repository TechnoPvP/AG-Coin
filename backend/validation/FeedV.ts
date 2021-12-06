import Joi from "joi"
import { FeedPost } from "shared/feed"

export default Joi.object<FeedPost>({
    user: Joi.string().required().alter({
        post: (schema) => schema.required(),
        put: (schema) => schema.forbidden().messages({
            'any.unknown': 'You cannot update a feed posts owner'
        })
    }),
    caption: Joi.string().required(),
    thumbnail: Joi.string().optional(),
})

// comments: Joi.object().optional().keys({
//     user: Joi.string().required(),
//     content: Joi.string().required()
// })