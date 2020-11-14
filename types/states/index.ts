import PostsState from './posts';
import AuthState from './auth';
import QueueState from './queue';
import QueueItemState from './queue_item';

export default interface RootState {
  posts: PostsState;
  auth: AuthState;
  queue: QueueState;
  queue_item: QueueItemState;
}
