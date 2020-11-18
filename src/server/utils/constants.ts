import Role from '../types/role';

export const ROLES = {
  ordinary: 'ordinary' as Role,
  dispatcher: 'dispatcher' as Role,
  admin: 'admin' as Role,
};

export const USER_FIND_EXCLUDE = '-_id -__v -password';
