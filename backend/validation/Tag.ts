import Joi from 'joi';

export const Tag = Joi.object({
    name: Joi
        .string()
        .required()
        .min(2)
        .message( "name must be 2 character or more." )
})

export const TagUpdate = Joi.object({
    before: Joi
        .string()
        .required()
        .min(2)
        .message( "name must be 2 character or more." ),
    after: Joi
        .string()
        .required()
        .min(2)
        .message( "name must be 2 character or more." ),
})