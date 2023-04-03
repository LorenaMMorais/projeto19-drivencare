import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(15).required(), 
    typeUser: joi.string().valid("D", "P").required()
});