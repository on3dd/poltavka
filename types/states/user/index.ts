import NextState from '../next';
import User from '../../User';

export default interface UserState extends NextState {
  data: User;
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
