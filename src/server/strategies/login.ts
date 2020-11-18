import { Model, Document } from 'mongoose';

import { Strategy } from 'passport-local';

import options from './options';

import User from '../models/user';
import IUser from '../types/user';
import { ROLES } from '../utils/constants';

const Login = new Strategy(
  options,
  async (phone, password, done) => {
    try {
      const user = await User.findOne({ phone });

      console.log('props', phone, password);
      console.log('user', user);

      if (!user) {
        return done(null, false, {
          message: 'User not found',
        });
      }

      const validate = await user.isValidPassword(password);

      if (!validate) {
        return done(null, false, {
          message: 'Wrong Password',
        });
      }

      return done(null, user, {
        message: 'Logged in Successfully',
      });
    } catch (error) {
      return done(error);
    }
  },
);

export default Login;
