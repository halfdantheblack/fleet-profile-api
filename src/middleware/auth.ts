import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import {envs} from "../config/env-config";

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
                
            }

        }
    } catch (err) {
        next(err);
    }
};