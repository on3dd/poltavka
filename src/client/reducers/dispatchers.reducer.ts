import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_DISPATCHERS,
  FETCHING_DISPATCHERS_SUCCESS,
  FETCHING_DISPATCHERS_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import DispatchersState from '../types/states/dispatchers';

const initialState: DispatchersState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const dispatchersReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith(
      //   'X',
      // ); // or any other criteria
      return Object.assign({}, state, action.payload.dispatchers);

    case FETCHING_DISPATCHERS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_DISPATCHERS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_DISPATCHERS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default dispatchersReducer;
