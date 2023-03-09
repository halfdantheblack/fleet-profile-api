import { Router } from "express";
import { userRouter } from "./user/user";
import { authRouter } from "./auth/authRouter";
export const route = Router()

route.use('/user',userRouter)
route.use('/auth',authRouter)


