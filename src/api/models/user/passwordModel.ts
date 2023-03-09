import { Schema, model, Types} from "mongoose";
import bcrypt from "bcrypt";

const PasswordModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  // {
  //   statics: {
  //       async get(id) {
  //           if (!Types.ObjectId.isValid(id)) {
  //             console.log("VALIDATION_ERROR");
  //           }
  //           const password:any = await this.findOne({ userId: id });
  //           if (!password)
  //             console.log({ message: "NO_RECORD_FOUND", status: "NOT_FOUND " });
  //           return password;
  //         }
  //   },
  // },
);



PasswordModel.pre("save", async function save(next: any) {
  try {

    if (!this.isModified("password")) return next();
    const salt: any = await bcrypt.genSalt(10);
    const hash: any = await bcrypt.hash(this.password, salt);
    this.password = hash;

    return next();
  } catch (err) {
    return next(err);
  }
});

PasswordModel.method({
  async matchPassword(this: { password: string }, password: string) {
    try {
      return bcrypt.compare(password, this.password);
    } catch (error) {}
  },
});

PasswordModel.statics = {
  async get(id) {
    
    if (!Types.ObjectId.isValid(id)) {
      console.log("VALIDATION_ERROR");
    }
    const password = await this.findOne({ userId: id });
    
    if (!password)
      console.log({ message: "NO_RECORD_FOUND", status: "NOT_FOUND " });
    return password;
  },
};

export const Password: any = model("Password", PasswordModel);
