import { Schema, model } from 'mongoose';
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

schema.pre('save', autoincrement);

export default model('User', schema);
