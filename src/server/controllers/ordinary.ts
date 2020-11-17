import Controller from '../types/controller';
import UserProps from '../types/user';
import User from '../models/user';
import {
  ROLES,
  USER_FIND_EXCLUDE,
} from '../utils/constants';

interface OrdinaryProps extends UserProps {}

class OrdinaryController implements Controller {
  public async all() {
    return User.find(
      { role: ROLES.ordinary },
      USER_FIND_EXCLUDE,
    );
  }

  public async find(id: string) {
    return User.findOne({ id }, USER_FIND_EXCLUDE);
  }

  public async create(props: OrdinaryProps) {
    const ordinary = new User({
      ...props,
      role: ROLES.ordinary,
    });

    return await ordinary.save();
  }
}

export default OrdinaryController;
