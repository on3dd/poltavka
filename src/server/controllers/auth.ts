import User from '../models/user';
import IUser from '../types/user';
import { USER_FIND_EXCLUDE } from '../utils/constants';

interface IAuthController {
  authenticate: (props: IUser) => Promise<any>;
}

class AuthController implements IAuthController {
  public async authenticate({ phone }: IUser) {
    return await User.findOne(
      { phone },
      USER_FIND_EXCLUDE,
    );
  }
}

export default AuthController;
