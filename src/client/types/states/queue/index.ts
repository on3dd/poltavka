import NextState from '../next';
import QueueItem from '../../QueueItem';

export default interface QueueState extends NextState {
  data: QueueItem[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
