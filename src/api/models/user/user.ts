import { getByPasswordByUser } from "../../services/user/passwordService";
import jwt from 'jsonwebtoken';
// const { Schema, model, Types } = require('mongoose');
import { Schema, model, Types, Model, Models } from 'mongoose'
import { IUser } from "../../interfaces";
import { roles } from "../roles/rolesModel";
import { envs } from "../../../config";
import moment from 'moment'

const jwtSecret:any = envs.jwtSecret



const UserModel = new Schema({
    user_name: {
      type: String,
      required: false,
      unique: true,
      lowercase: true,
      trim: true,
    },
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    middle_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

  },
);




UserModel.method({
  async token(this:IUser) {
    // const user_role = await roles.findById(this.role).exec();
    // console.log(user_role);
    
    const playload = {
      exp: moment().add(envs.jwtExpirationInterval, 'minutes').unix(),
      iat: moment().unix(),
      sub: this._id,
      // role: user_role.name
    };
    
    return jwt.sign(playload, jwtSecret);

    
  }
})


UserModel.statics = {
  async validateUserAndGenerateToken(options:any) {
    const { user_name, password } = options;
    const user = await this.findOne({ user_name: user_name }).exec()
    
    if (!user) {
      // throw ({ message: INVALID_CREDENTIALS, status: UNAUTHORIZED });
      console.log("INVALID USER");
      return 
    }
    const pass = await getByPasswordByUser(user._id);
    
    return {user: user,accessToken: await user.token()};
  
  },
}





export const User = model<IUser>('User', UserModel);
