import Controller from '../types/controller';
import UserProps from '../types/user';
import User from '../models/user';

interface AdminProps extends UserProps {}

class AdminController implements Controller {
  public async all() {
    return User.find({ role: 'admin' });
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
