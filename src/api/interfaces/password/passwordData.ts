import { Document, Schema } from 'mongoose';

export interface IPassword extends Document {
  userId?: Schema.Types.ObjectId;
  password: string;
}
