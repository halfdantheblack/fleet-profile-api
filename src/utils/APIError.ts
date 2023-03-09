import { constants } from "./constants";
import { APIErrorProps } from "../api/interfaces";


class APIError extends Error {
    public errors: any[];
    public status: number;
    public isPublic: boolean;
    
    
    constructor({
        message,
        stack,
        errors = [],
        status = constants.INTERNAL_SERVER_ERROR,
        isPublic = false,
    }:APIErrorProps){
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errors = errors;
        this.status = status;
        this.isPublic = isPublic;
        this.stack = stack;
      }
}


export default APIError