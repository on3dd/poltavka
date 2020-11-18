import { Strategy, ExtractJwt } from 'passport-jwt';

import { SECRET } from '../utils/constants';

const JWT = new Strategy(
  {
    secretOrKey: SECRET,
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter(
      'token',
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
