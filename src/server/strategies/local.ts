import { Strategy } from 'passport-local';

import User from '../models/user';
import IUser from '../types/user';

const Local = new Strategy(
  {
    usernameField: 'phone',
    passwordField: 'password',
  },
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

      return done(null, user);
    });
  },
);

export default Local;
