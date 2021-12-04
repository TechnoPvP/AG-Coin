import Joi, { TopLevelDomainOptions } from "joi"
import tlds from "$lib/utils/tlds"

export const Register = Joi.object({
    first_name: Joi
        .string()
        .required()
        .min(2)
        .messages({
            "string.min": "First name must be 2 characters or more",
            "any.required": "is required (example, John Doe)"
        }),
    last_name: Joi
        .string()
        .required()
        .min(2)
        .messages({
            "string.min": "Last name must be 2 characters or more",
            "any.required": "Full name field is required (example, John Doe)"
        }),
    email: Joi
        .string()
        .required()
        .email({ tlds: tlds as TopLevelDomainOptions })
        .message("Invalid Email (example johndoe@example.com)"),
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
})