import { Schema, model, HookNextFunction } from 'mongoose';
import { hash, compare } from 'bcrypt';

import IUser from '../types/user';

import autoincrement from '../utils/autoincrement';

const schema = new Schema({
  id: {
    type: Number,
    unique: true,
    min: 1,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'ordinary',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // added_by: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
});

schema.pre<IUser>('save', autoincrement);

schema.pre<IUser>('save', async function (next) {
  this.password = await hash(this.password, 10);

  next();
});

schema.methods.isValidPassword = async function (
  password: string,
) {
  return await compare(password, this.password);
};

export default model<IUser>('User', schema);
