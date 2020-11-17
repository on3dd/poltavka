import Controller from '../types/controller';
import UserProps from '../types/user';
import User from '../models/user';
import { USER_FIND_EXCLUDE } from '../utils/constants';

interface AdminProps extends UserProps {}

class AdminController implements Controller {
  public async all() {
    return User.find(
      { role: 'admin' },
      USER_FIND_EXCLUDE,
    );
  }

  public async find(id: string) {
    return User.findOne({ id }, USER_FIND_EXCLUDE);
  }

  public async create(props: AdminProps) {
    const admin = new User({
      ...props,
      role: 'admin',
    });

    return await admin.save();
  }
}

export default AdminController;
