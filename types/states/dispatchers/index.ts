import NextState from '../next';
import Dispatcher from '../../Dispatcher';

export default interface DispatchersState extends NextState {
  data: Dispatcher[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
