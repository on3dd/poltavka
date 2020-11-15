import NextState from '../next';
import Administrator from '../../Administrator';

export default interface AdministratorsState extends NextState {
  data: Administrator[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
