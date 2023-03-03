import { Router } from "express";
import { UserController } from "../../controller";
import { Authorize } from "../../../middleware";
export const userRouter = Router();
userRouter.get('/',Authorize,UserController.getUsers);
userRouter.post('/',Authorize,UserController.createUser)
userRouter.put('/:id',Authorize,UserController.updateUser);
userRouter.get('/:id',Authorize,UserController.getUsers);
userRouter.delete('/:id',Authorize,UserController.deleteUser);


