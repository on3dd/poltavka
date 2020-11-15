import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAIL,
  CREATING_USER,
  CREATING_USER_SUCCESS,
  CREATING_USER_FAIL,
  UPDATING_USER,
  UPDATING_USER_SUCCESS,
  UPDATING_USER_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import UserState from '../types/states/user';

const initialState: UserState = {
  data: {
    name: '',
    country: '',
    phone: '',
    prefix: '+7',
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const userReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient =
      //   stateDiff?.user?.[0] === undefined;
      return Object.assign({}, state, action.payload.user);

    case FETCHING_USER:
    case CREATING_USER:
    case UPDATING_USER:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_USER_SUCCESS:
    case CREATING_USER_SUCCESS:
    case UPDATING_USER_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_USER_FAIL:
    case CREATING_USER_FAIL:
    case UPDATING_USER_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default userReducer;
