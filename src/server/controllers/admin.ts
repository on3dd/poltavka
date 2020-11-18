import Controller from '../types/controller';
import UserProps from '../types/user';
import User from '../models/user';
import {
  ROLES,
  USER_FIND_EXCLUDE,
} from '../utils/constants';

interface AdminProps extends UserProps {}
interface AdminDraft extends Partial<UserProps> {}

class AdminController implements Controller {
  public async all() {
    return User.find(
      { role: ROLES.admin },
      USER_FIND_EXCLUDE,
    );
  }

  public async find(id: string) {
    return await User.findOne({ id }, USER_FIND_EXCLUDE);
  }

  public async create(props: AdminProps) {
    const admin = new User({
      ...props,
      role: ROLES.admin,
    });

    return await admin.save();
  }

  public async update(id: string, props: AdminDraft) {
    return await User.findOneAndUpdate({ id }, props, {
      new: true,
      fields: USER_FIND_EXCLUDE,
    });
  }
}

export default AdminController;
