import { User } from "../../models";

export async function get():Promise<any[]>{
    return await User.find()
}
export async function createUser( data:any):Promise<any>{
    const user = new User(data);
    await user.save()
    return user;
}