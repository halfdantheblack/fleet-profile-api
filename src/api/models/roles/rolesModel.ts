import { Schema, model, Types } from "mongoose";


const RolesModel = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    
},
{
    statics: {
        async get(id) {
            if(!Types.ObjectId.isValid(id)) {
                console.log("please enter valid user");  
            }
            const user = await this.findById(id).exec();
            if (!user) console.log("no record found");
            return user
        }
    }
}
);

export const roles: any = model("roles", RolesModel)