import { Document } from 'mongoose';

export interface IUser extends Document {
  user_name?: string;
  first_name: string;
  middle_name?: string;
  last_name?: string;
  phone: string;
  email: string;
  role: string;
}

