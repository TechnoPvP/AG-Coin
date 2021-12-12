import Joi from "joi";

export const Blog = Joi.object({
    title: Joi
        .string()
        .required(),
    difficulty: Joi
        .string()
        .valid("EASY", "MEDIUM", "HARD")
        .insensitive(),
    status: Joi
        .string()
        .required()
        .valid("PUBLISHED", "DRAFT")
        .insensitive(),
    body: Joi
        .string()
        .required(),
})