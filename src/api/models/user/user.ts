const { Schema, model, Types } = require('mongoose');
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
    }
}
);
export const User = model('User', UserModel);
