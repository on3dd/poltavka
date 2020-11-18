import User from '../models/user';
import { ROLES } from './constants';

const isPrivileged = async (_id: string) => {
  const user = await User.findById(_id);

  return (
    user.role === ROLES.admin ||
    user.role === ROLES.dispatcher
  );
};

export default isPrivileged;
