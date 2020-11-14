import PostsState from './posts';
import QueueState from './queue';

export default interface RootState {
  posts: PostsState;
  queue: QueueState;
}
