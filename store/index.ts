import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {
  MakeStore,
  createWrapper,
  Context,
} from 'next-redux-wrapper';

import RootState from '../types/states/index';
import rootReducer from '../reducers/index';

const middleware = applyMiddleware(thunk, promise);

const makeStore: MakeStore<RootState> = (ctx: Context) =>
  createStore(rootReducer, middleware);

const wrapper = createWrapper<RootState>(makeStore, {
  debug: !process.env.isProd,
});

export default wrapper;
