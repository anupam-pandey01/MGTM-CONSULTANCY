const Joi = require("joi");

const contactValidationSchema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.empty": "Full name is required",
            "string.min": "Full name must be at least 3 characters",
            "any.required": "Full name is required"
        }),

    gender: Joi.string()
        .valid("male", "female", "others")
        .required()
        .messages({
            "any.only": "Gender must be male, female, or others",
            "any.required": "Gender is required"
        }),

    contactNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            "string.pattern.base": "Contact number must be 10 digits",
            "any.required": "Contact number is required"
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Invalid email format",
            "any.required": "Email is required"
        })
});

const joinAsValidationSchema = Joi.object({
    organizationName: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.empty": "organization name is required",
            "string.min": "organization name must be at least 3 characters",
            "any.required": "organization name is required"
        }),

    joinAs: Joi.string()
        .valid("college", "school", "others")
        .required()
        .messages({
            "any.only": "Join As must be college, school, or others",
            "any.required": "Join As is required"
        }),

    contactNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            "string.pattern.base": "Contact number must be 10 digits",
            "any.required": "Contact number is required"
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.email": "Invalid email format",
            "any.required": "Email is required"
        })
});

module.exports = { 
    contactValidationSchema,
    joinAsValidationSchema
};