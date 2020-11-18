import { Document } from 'mongoose';

import Role from './role';
export default interface User extends Document {
  id?: number;
  name: string;
  country: string;
  prefix: '+7';
  phone: string;
  password?: string;
  role?: Role;

  isValidPassword: (password: string) => Promise<boolean>;
}
