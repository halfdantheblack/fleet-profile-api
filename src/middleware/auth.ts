import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import APIError from "../utils/APIError";
import {envs} from "../config/env-config";
import {constants} from '../utils/constants'
const jwtSecret: any = envs.jwtSecret

export const Authorize = (allowedRoles: any) => (req:Request, res:Response, next:NextFunction) => {
    try {
        let token = req.headers['authorization'];
        if (token) {
            const decoded: any = jwt.verify(token.split(' ')[1], jwtSecret);
            if (allowedRoles.find((ls: any) => ls == decoded.role)) {
                next();
            } else {
                console.log('USER_NOT_AUTHORIZED');
                next(new APIError({ message: constants.USER_NOT_AUTHERIZED, status: constants.FORBIDDEN}));
                
            }

        }
    } catch (err) {
        next(err);
    }
};