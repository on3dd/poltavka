import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_ADMINISTRATORS,
  FETCHING_ADMINISTRATORS_SUCCESS,
  FETCHING_ADMINISTRATORS_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import AdministratorsState from '../types/states/administrators';

const initialState: AdministratorsState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const administratorsReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith(
      //   'X',
      // ); // or any other criteria
      return Object.assign(
        {},
        state,
        action.payload.administrators,
      );

    case FETCHING_ADMINISTRATORS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ADMINISTRATORS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ADMINISTRATORS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default administratorsReducer;
