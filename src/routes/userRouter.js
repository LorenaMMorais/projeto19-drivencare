import { Router } from "express";
import userController from "../controllers/userController.js";
import validationSchema from "../middlewares/schemaValidationMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/', validationSchema(userSchema), userController.signup);
userRouter.post('/signin', userController.signin);

export default userRouter;