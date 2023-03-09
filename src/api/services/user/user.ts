import { User } from "../../models";
import { Password } from "../../models";
import {generatePassword} from '../../../utils/index'

export async function get():Promise<any[]>{
    return await User.find()
}
export async function createUser( data:any):Promise<any>{
    try{
        const user = new User(data);
        const save = await user.save()
        const pass= await generatePassword(12)
        console.log(pass);
        
        const password = new Password({userId:save._id,password:pass})
        
        
        const savePass= password.save()
        return user;
    } catch (err){
        throw User.checkDuplication(err)
    }

}