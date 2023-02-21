import { Router } from "express";
import { userRouter } from "./user/user";
export const route = Router()

route.use('/user',userRouter)

