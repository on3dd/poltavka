import { Strategy } from 'passport-local';

import options from './options';

import User from '../models/user';
import IUser from '../types/user';

const Admin = new Strategy(
  options,
  (phone, password, done) => {
    User.findOne({ phone }, (err, user: IUser) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password !== password) {
        return done(null, false);
      }

      if (user.role !== 'admin') {
        return done(null, false);
      }

      return done(null, user);
    });
  },
);

export default Admin;
