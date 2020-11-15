import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_DISPATCHER,
  FETCHING_DISPATCHER_SUCCESS,
  FETCHING_DISPATCHER_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import DispatchersState from '../types/states/dispatcher';

const initialState: DispatchersState = {
  data: {
    name: '',
    country: '',
    phone: '',
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const dispatcherReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient =
      //   stateDiff?.dispatcher?.[0] === undefined;
      return Object.assign({}, state, action.payload.dispatcher);

    case FETCHING_DISPATCHER:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_DISPATCHER_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_DISPATCHER_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default dispatcherReducer;
