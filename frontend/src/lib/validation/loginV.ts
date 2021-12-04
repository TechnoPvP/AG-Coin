import Joi from 'joi';

export const emailValidation = Joi.object({
    email: Joi
        .string().email({tlds: false})
        .required(),
})

export const passwordValidation  = Joi.object({
    password: Joi
    .string()
    .required()
    .min(5)
})