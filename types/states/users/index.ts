import NextState from '../next';
import User from '../../User';

export default interface UsersState extends NextState {
  data: User[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
