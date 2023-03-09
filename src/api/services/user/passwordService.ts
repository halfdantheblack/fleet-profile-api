import { Password } from "../../models";

export const savePassword = async (passwordData: any) => {
    try {
        const password = new Password(passwordData);
        const pass = await password.save();
        if (!pass._id) {
            return false;
        }
        return true;    
    } catch (err) {
        throw err;
    }
};

export const getByPasswordByUser = async (userId: any) =>  Password.get(userId);