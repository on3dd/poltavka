import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import queueReducer from './queue.reducer';
import queueItemReducer from './queue_item.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';
import dispatchersReducer from './dispatchers.reducer';
import dispatcherReducer from './dispatcher.reducer';

export default combineReducers({
  auth: authReducer,
  queue: queueReducer,
  queue_item: queueItemReducer,
  users: usersReducer,
  user: userReducer,
  dispatchers: dispatchersReducer,
  dispatcher: dispatcherReducer,
});
