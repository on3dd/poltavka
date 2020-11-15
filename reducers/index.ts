import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';
import authReducer from './auth.reducer';
import queueReducer from './queue.reducer';
import queueItemReducer from './queue_item.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  queue: queueReducer,
  queue_item: queueItemReducer,
  users: usersReducer,
  user: userReducer,
});
