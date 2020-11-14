import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';
import authReducer from './auth.reducer';
import queueReducer from './queue.reducer';
import queueItemReducer from './queue_item.reducer';

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  queue: queueReducer,
  queue_item: queueItemReducer,
});
