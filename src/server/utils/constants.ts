import { sha256 } from 'js-sha256';

import { Role } from '../types/roles';

export const ROLES = {
  ordinary: 'ordinary' as Role,
  dispatcher: 'dispatcher' as Role,
  admin: 'admin' as Role,
};

export const USER_FIND_EXCLUDE = '-_id -__v -password';

export const SECRET = sha256('very secret message to hash');
