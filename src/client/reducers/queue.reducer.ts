import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_QUEUE,
  FETCHING_QUEUE_SUCCESS,
  FETCHING_QUEUE_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import QueueState from '../types/states/queue';

const initialState: QueueState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const queueReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith(
      //   'X',
      // ); // or any other criteria
      return Object.assign({}, state, action.payload.queue);

    case FETCHING_QUEUE:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_QUEUE_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_QUEUE_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default queueReducer;
