import NextState from '../next';
import QueueItem from '../../QueueItem';

export default interface SymbolsState extends NextState {
  data: QueueItem[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
