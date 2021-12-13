import Joi from "joi"
import { FeedPost } from "shared/feed"

export default Joi.object<FeedPost>({
    caption: Joi.string().required(),
    thumbnail: Joi.string().optional(),
})

// comments: Joi.object().optional().keys({
//     user: Joi.string().required(),
//     content: Joi.string().required()
// })