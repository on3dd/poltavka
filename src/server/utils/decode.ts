import { verify } from 'jsonwebtoken';

import { SECRET } from './constants';

const decode = (token: string) =>
  verify(token, SECRET) as {
    _id: string;
    phone: string;
    expires: string;
  };

export default decode;
