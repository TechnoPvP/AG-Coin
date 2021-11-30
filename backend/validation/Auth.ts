import Joi from "joi"

export const Register = Joi.object({
    email: Joi
        .string()
        .required()
        .email(),
    password: Joi
        .string()
        .required()
        .min(5)
        .pattern(/.*[0-9].*/, { name: "min number characters" })
        .pattern(/.*[!@#$%^&*(),.?":{}|<>].*/, { name: "min amount special characters" })
        .pattern(/\s/, { name: "contains spaces", invert: true }),
    first: Joi
        .string()
        .min(2)
        .required(),
    last: Joi
        .string()
        .required()
        .min(2),
})

export const Login = Joi.object({
    email: Joi
        .string()
        .required()
        .email(),
    password: Joi
        .string()
        .required()
        .min(5)
        .pattern(/.*[0-9].*/, { name: "min number characters" })
        .pattern(/.*[!@#$%^&*(),.?":{}|<>].*/, { name: "min amount special characters" })
        .pattern(/\s/, { name: "contains spaces", invert: true }),
})