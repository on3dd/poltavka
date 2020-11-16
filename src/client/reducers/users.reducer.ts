import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import UsersState from '../types/states/users';

const initialState: UsersState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const usersReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith(
      //   'X',
      // ); // or any other criteria
      return Object.assign({}, state, action.payload.users);

    case FETCHING_USERS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_USERS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_USERS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default usersReducer;
