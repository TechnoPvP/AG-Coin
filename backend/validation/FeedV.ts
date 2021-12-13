import Joi from "joi"

export default Joi.object({
    caption: Joi.string().required(),
    thumbnail: Joi.string().optional(),
})
