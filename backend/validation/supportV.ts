import Joi from 'joi';

export default Joi.object({
    slug: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    topics: Joi.array(),
})
