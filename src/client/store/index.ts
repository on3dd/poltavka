import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import promise from 'redux-promise';
import {
  MakeStore,
  createWrapper,
  Context,
} from 'next-redux-wrapper';

import Action from '../types/Action';
import RootState from '../types/states';
import rootReducer from '../reducers';

const middleware = applyMiddleware(
  thunk as ThunkMiddleware<RootState, Action>,
  promise,
);

const makeStore: MakeStore<RootState> = (ctx: Context) =>
  createStore(rootReducer, middleware);

const wrapper = createWrapper<RootState>(makeStore, {
  debug: !process.env.isProd,
});

export default wrapper;
