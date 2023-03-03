import { getByPasswordByUser } from "../../services/user/passwordService";
import jwt from 'jsonwebtoken';
// const { Schema, model, Types } = require('mongoose');
import { Schema, model, Types, Model, Models } from 'mongoose'
import { IUser } from "../../interfaces";
import { roles } from "../roles/rolesModel";
import { envs } from "../../../config";
<<<<<<< HEAD
import moment from 'moment'
=======
import APIError from "../../../utils/APIError";
import { constants } from "../../../utils/constants";

>>>>>>> 8-common-error-module

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
      throw new APIError({ message: constants.INVALID_CREDENTIALS, status: constants.UNAUTHORIZED });
    }
    const pass = await getByPasswordByUser(user._id);
    if (!await pass.matchPassword(password)) {
      
      throw new APIError({message: constants.INVALID_CREDENTIALS, status: constants.UNAUTHORIZED})
    }
    
    return {user: user,accessToken: await user.token()};
  
  },
  checkDuplication(error) {
    if (error.code === 11000 || (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
      const keys = Object.keys(error.keyPattern);
      if (keys.includes('user_name')) {
        return new APIError({ message: 'user name already exist', status: constants.NOT_FOUND });
      }
      if (keys.includes('email')) {
        return new APIError({
          message: constants.EMAIL_EXIST,
          status: constants.BAD_REQUEST,
          errors: [{
            field: 'email',
            location: 'body',
            messages: 'Email is already in use',
          }],
        });
      }
    }
    return error;
  },
}





export const User = model<IUser>('User', UserModel);
