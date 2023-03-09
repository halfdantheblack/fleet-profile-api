import { Request,Response,NextFunction, response } from "express";
import { validationResult } from "express-validator";
import APIError from "../utils/APIError";


const Handler = (err: APIError,req: Request,res: Response,next:NextFunction) => {
   const response = {
    code: err.status,
    message:err.message,
    errors:err.errors,
    stack:err.stack
   };
   res.status(response.code).json(response)
   res.end(); 
}

export {Handler, Handler as ErrorHandler}

export const ConvertError = (err:APIError,req:Request,res:Response,next:NextFunction) => {
    let ConvertedError = new APIError({
        message:err.message,
        status:err.status,
        stack:err.stack,
    })
    return Handler(ConvertedError,req,res,next)
}