import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';
import queueReducer from './queue.reducer';

export default combineReducers({
  posts: postsReducer,
  queue: queueReducer,
});
