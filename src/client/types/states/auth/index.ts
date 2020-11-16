import NextState from '../next';
import Auth from '../../Auth';

export default interface AuthState extends NextState {
  data: Auth;
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
