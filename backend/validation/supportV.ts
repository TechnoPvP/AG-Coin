import Joi from 'joi';
import { Topics } from "shared/prisma/generated/prisma-client-js"

const types: Topics[] = ["test1", "test2", "test3", "test4"]

export default Joi.object({
    title: Joi.string().alter({
        default: scheme => scheme.required(),
        put: scheme => scheme.optional(),
    }),
    content: Joi.string().alter({
        default: scheme => scheme.required(),
        put: scheme => scheme.optional(),
    }),
    topics: Joi.array().items(
        Joi.string().insensitive().valid(...types)
    ),
})
