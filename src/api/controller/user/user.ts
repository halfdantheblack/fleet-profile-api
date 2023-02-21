import { Request,Response } from "express"
import { UserService } from "../../services"
export const getUsers = async (req:Request,res:Response)=>{
    res.json({"Users":await UserService.get()}).status(200)
}
export const createUser = async (req:Request,res:Response)=>{
    res.json({"message":await UserService.createUser(req.body)}).status(200)
}