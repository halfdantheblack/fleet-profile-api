import { Request,Response,NextFunction, response } from "express";
import { authService } from "../../services";




export const login = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = await authService.login(req.body);
        res.status(201).json({data: data, success: 'SUCCESS'});
    } catch (err) {
        next(err);
    }
};