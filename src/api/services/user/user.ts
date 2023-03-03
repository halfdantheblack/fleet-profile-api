import { User } from "../../models";
import { Password } from "../../models";
import {generatePassword} from '../../../utils/index'
import { IUser } from "../../interfaces";
import { Model } from "mongoose";



export async function get():Promise<any[]>{
    return await User.find()
}
export async function createUser( data:any):Promise<any>{
    const user = new User(data);
    const save = await user.save()
    const pass= await generatePassword(12)
    const password = new Password({userId:save._id,password:pass})
    
    
    const savePass= password.save()
    return user;
}

export async function getUser(id:string):Promise<any>{
    return await User.find({_id:id})
}





export async function deleteUser( id:string):Promise<any>{
    const user = await getUser(id)
    await user.delete()
    return user;
}

export async function updateUser(id:string,data:any):Promise<any> {
    
    const user   = await  getUser(id)
    await user.update(data)
    return user;
}



