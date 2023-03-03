import { User } from "../../models"



export const login = async (userData:any) => {
    const {user, accessToken} = await User.validateUserAndGenerateToken(userData);
    return {user, accessToken}
    
    // const token = ge
}  