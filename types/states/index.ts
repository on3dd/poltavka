import PostsState from './posts';
import AuthState from './auth';
import QueueState from './queue';

export default interface RootState {
  posts: PostsState;
  auth: AuthState;
  queue: QueueState;
}
