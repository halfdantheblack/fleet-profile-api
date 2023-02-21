import { Router } from "express";
import { UserController } from "../../controller";
export const userRouter = Router();
userRouter.get('/',UserController.getUsers);
userRouter.post('/',UserController.createUser)
