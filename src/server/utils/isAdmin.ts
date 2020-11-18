import User from '../models/user';
import { ROLES } from './constants';

const isAdmin = async (_id: string) => {
  const user = await User.findById(_id);

  return user.role === ROLES.admin;
};

export default isAdmin;
