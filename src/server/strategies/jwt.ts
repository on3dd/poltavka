import { Strategy, ExtractJwt } from 'passport-jwt';

import options from './options';

import User from '../models/user';
import IUser from '../types/user';
import { ROLES } from '../utils/constants';

const JWT = new Strategy(
  {
    secretOrKey: 'TOP_SECRET',
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter(
      'secret_token',
    ),
  },
  async (token, done) => {
    try {
      return done(null, token.user);
    } catch (err) {
      done(err);
    }
  },
);

export default JWT;
