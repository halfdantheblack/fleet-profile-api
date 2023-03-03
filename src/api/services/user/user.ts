import { User } from "../../models";
import { Password } from "../../models";
import {generatePassword} from '../../../utils/index'
import APIError from "../../../utils/APIError";
import { constants } from "../../../utils/constants";

export async function get():Promise<any[]>{
    return await User.find()
}
export async function createUser( data:any):Promise<any>{
    try {
        const user = new User(data);
        const save = await user.save()
        if (save._id){
            const pass= await generatePassword(12)
            
            const password = new Password({userId:save._id,password:pass})
            if (!password) {
                throw new Error("failed")
            }
            const savePass= password.save()
          
            
        }
        return user;
    } catch (err) {
        throw User.checkDuplication(err);
    }
}