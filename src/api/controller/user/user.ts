import { NextFunction, Request,Response } from "express"
import APIError from "../../../utils/APIError"
import { UserService } from "../../services"
export const getUsers = async (req:Request,res:Response)=>{
    res.json({"Users":await UserService.get(), success: 'SUCCESS'}).status(200)
}
export const createUser = async (req:Request,res:Response,next:any)=>{
    try {
        res.json({"message":await UserService.createUser(req.body), success: 'SUCCESS'}).status(200)

    } catch (error) {
        return next(error)
    }
}