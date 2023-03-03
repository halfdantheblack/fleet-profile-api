import {validationResult} from 'express-validator';
import APIError from '../utils/APIError';
import { envs } from '../config';
import { Request,Response,NextFunction } from 'express';

const Handler = (err: APIError,req: Request,res: Response,next: NextFunction) => {
    const response = {
        code: err.status,
        message: err.message,
        errors: err.errors,
        stack: err.stack
    };
    res.status(response.code).json(response);
    res.end();
}

export {Handler, Handler as ErrorHandler}

export const ConvertError = (err:APIError,req:Request,res:Response,next:NextFunction) => {
    let ConvertedError = new APIError({
        message:err.message,
        status:err.status,
        stack:err.stack
    })
    return Handler(ConvertedError,req,res,next)
};


export const NotFound = (req:Request,res:Response,next:NextFunction) => {
    const err = new APIError({
        message: 'Resource Not Found',
        status: 404,
    });
    return Handler(err,req,res,next)
};