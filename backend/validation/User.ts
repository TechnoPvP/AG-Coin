import Joi from "joi"

export const UserUpdate = Joi.object({
    password: Joi
        .string()
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
        .min(2)
        .message("first name must be 2 characters or more")
        .pattern(/\s/, { name: "spaces", invert: true })
        .message("first name cannot contain any whitespaces"),
    last_name: Joi
        .string()
        .min(2)
        .message("last name must be 2 characters or more")
        .pattern(/\s/, { name: "spaces", invert: true })
        .message("last name cannot contain any whitespaces"),
})