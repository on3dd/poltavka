import AuthState from './auth';
import QueueState from './queue';
import QueueItemState from './queue_item';
import UsersState from './users';
import UserState from './user';
import DispatchersState from './dispatchers';
import DispatcherState from './dispatcher';

export default interface RootState {
  auth: AuthState;
  queue: QueueState;
  queue_item: QueueItemState;
  users: UsersState;
  user: UserState;
  dispatchers: DispatchersState;
  dispatcher: DispatcherState;
}
