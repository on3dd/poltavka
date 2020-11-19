import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  AUTHENTICATION,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import AuthState from '../types/states/auth';

const initialState: AuthState = {
  data: {
    password: '',
    phone: '',
    prefix: '+7',
    remember: true,
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const authReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload) as any;
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith(
        'X',
      ); // or any other criteria
      return Object.assign({}, state, action.payload.auth, {
        page: wasBumpedOnClient
          ? state.page
          : action.payload.page, // keep existing state or use hydrated
      });

    case AUTHENTICATION:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case AUTHENTICATION_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default authReducer;
