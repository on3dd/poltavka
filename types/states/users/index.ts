import NextState from '../next';
import Ordinary from '../../Ordinary';

export default interface UsersState extends NextState {
  data: Ordinary[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
