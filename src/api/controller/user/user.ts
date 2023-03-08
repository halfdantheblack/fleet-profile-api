import { NextFunction, Request, Response } from "express"
import APIError from "../../../utils/APIError"
import { UserService } from "../../services"



export const getUsers = async (req: Request, res: Response) => {
    res.json({ "Users": await UserService.get(), success: 'SUCCESS' }).status(200)
}

export const getUser = async (req: Request, res: Response) => {
    res.json({ "message": await UserService.getUser(req.params.id) })
}
export const updateUser = async (req: Request, res: Response) => {
    res.json({ "message": await UserService.updateUser(req.params.id, req.body) }).status(200)
}

export const deleteUser = async (req: Request, res: Response) => {
    res.json({ "message": await UserService.deleteUser(req.params.id) }).status(200)
}

export const createUser = async (req: Request, res: Response, next: any) => {
    try {
        res.json({ "message": await UserService.createUser(req.body), success: 'SUCCESS' }).status(200)

    } catch (error) {
        return next(error)
    }
}
