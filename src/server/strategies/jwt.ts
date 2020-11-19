import { Strategy, ExtractJwt } from 'passport-jwt';

import { SECRET } from '../utils/constants';

const JWT = new Strategy(
  {
    secretOrKey: SECRET,
    jwtFromRequest: (req) => req.cookies.token,
  },
  async (token, done) => {
    if (Date.now() > token.expires) {
      return done('jwt expired');
    }

    return done(null, token);
  },
);

export default JWT;
