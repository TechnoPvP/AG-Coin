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
        .valid("PUBLISH", "DRAFT")
        .insensitive(),
    body: Joi
        .string()
        .required(),
    tags: Joi
        .array()
        .items(
            Joi.object({ 
                name: Joi.string() 
            })
        )
        .unique()
})