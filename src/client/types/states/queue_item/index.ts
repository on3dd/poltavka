import NextState from '../next';
import QueueItem from '../../QueueItem';

export default interface QueueItemState extends NextState {
  data: QueueItem;
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
