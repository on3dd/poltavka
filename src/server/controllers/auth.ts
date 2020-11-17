import User from '../models/user';
import IUser from '../types/user';

interface IAuthController {
  authenticate: (props: IUser) => Promise<any>;
}

class AuthController implements IAuthController {
  public async authenticate({ phone }: IUser) {
    return await User.findOne(
      { phone },
      '-_id -__v -password',
    );
  }
}

export default AuthController;
