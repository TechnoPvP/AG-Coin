import Joi from "joi";

export const Blog = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    difficulty: Joi.string().valid("EASY", "MEDIUM", "HARD").insensitive(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).unique()
})