import { Strategy } from 'passport-local';

import options from './options';

import User from '../models/user';
import IUser from '../types/user';
import { ROLES } from '../utils/constants';

const Admin = new Strategy(
  options,
  (phone, password, done) => {
    User.findOne({ phone }, (err, user: IUser) => {
      console.log('phone', phone);
      console.log('password', password);

      console.log('err', err);
      console.log('user', user);

      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password !== password) {
        return done(null, false);
      }

      if (user.role !== ROLES.admin) {
        return done(null, false);
      }

      return done(null, user);
    });
  },
);

export default Admin;
