import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_QUEUE_ITEM,
  FETCHING_QUEUE_ITEM_SUCCESS,
  FETCHING_QUEUE_ITEM_FAIL,
  CREATING_QUEUE_ITEM,
  CREATING_QUEUE_ITEM_SUCCESS,
  CREATING_QUEUE_ITEM_FAIL,
  UPDATING_QUEUE_ITEM,
  UPDATING_QUEUE_ITEM_SUCCESS,
  UPDATING_QUEUE_ITEM_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import QueueItemState from '../types/states/queue_item';

const initialState: QueueItemState = {
  data: {
    driver: '',
    product: '',
    car_number: '',
    car_owner: '',
    car_location: '',
    car_status: '',
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const queueItemReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient =
      //   stateDiff?.queue_item?.[0] === undefined;
      return Object.assign(
        {},
        state,
        action.payload.queue_item,
      );

    case FETCHING_QUEUE_ITEM:
    case CREATING_QUEUE_ITEM:
    case UPDATING_QUEUE_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_QUEUE_ITEM_SUCCESS:
    case CREATING_QUEUE_ITEM_SUCCESS:
    case UPDATING_QUEUE_ITEM_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_QUEUE_ITEM_FAIL:
    case CREATING_QUEUE_ITEM_FAIL:
    case UPDATING_QUEUE_ITEM_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default queueItemReducer;
