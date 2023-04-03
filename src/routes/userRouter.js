import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/', userController.signup);

export default userRouter;