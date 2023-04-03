import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(15).required(), 
    userType: joi.valid("D", "P"),
    locationId: joi.alternatives().conditional('userType', {
        is: "D",
        then: joi.number().required(),
        otherwise: joi.optional()
    })
});