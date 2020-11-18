import Controller from '../types/controller';
import UserProps from '../types/user';
import User from '../models/user';
import {
  ROLES,
  USER_FIND_EXCLUDE,
} from '../utils/constants';

interface DispatcherProps extends UserProps {}
interface DispatcherDraft extends Partial<UserProps> {}

class DispatcherController implements Controller {
  public async all() {
    return User.find(
      { role: ROLES.dispatcher },
      USER_FIND_EXCLUDE,
    );
  }

  public async find(id: string) {
    return User.findOne({ id }, USER_FIND_EXCLUDE);
  }

  public async create(props: DispatcherProps) {
    const dispatcher = new User({
      ...props,
      role: ROLES.dispatcher,
    });

    return await dispatcher.save();
  }

  public async update(id: string, props: DispatcherDraft) {
    return await User.findOneAndUpdate({ id }, props, {
      new: true,
      fields: USER_FIND_EXCLUDE,
    });
  }

  public async delete(id: string) {
    return await User.findOneAndDelete(
      { id },
      {
        projection: USER_FIND_EXCLUDE,
      },
    );
  }
}

export default DispatcherController;
