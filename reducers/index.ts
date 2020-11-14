import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';
import authReducer from './auth.reducer';
import queueReducer from './queue.reducer';

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  queue: queueReducer,
});
