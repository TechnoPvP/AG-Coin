import Joi from "joi"

export const Register = Joi.object({
    email: Joi
        .string()
        .required()
        .email()
        .message("Email is invalid"),
    password: Joi
        .string()
        .required()
        .min(5)
        .message("Password must be 5 characters or more")
        .pattern(/.*[0-9].*/, { name: "min-number" })
        .message("Password must contain atleast 1 numerical character")
        .pattern(/.*[!@#$%^&*(),.?":{}|<>].*/, { name: "min-special" })
        .message("Password must contain atleast 1 special character")
        .pattern(/\s/, { name: "spaces", invert: true })
        .message("Password cannot contain any whitespaces"),
    first_name: Joi
        .string()
        .required()
        .min(2)
        .message("first name must be 2 characters or more"),
    last_name: Joi
        .string()
        .required()
        .min(2)
        .message("last name must be 2 characters or more"),
})

export const Login = Joi.object({
    email: Joi
        .string()
        .required()
        .email(),
    password: Joi
        .string()
        .required(),
})