import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_ADMINISTRATOR,
  FETCHING_ADMINISTRATOR_SUCCESS,
  FETCHING_ADMINISTRATOR_FAIL,
  CREATING_ADMINISTRATOR,
  CREATING_ADMINISTRATOR_SUCCESS,
  CREATING_ADMINISTRATOR_FAIL,
  UPDATING_ADMINISTRATOR,
  UPDATING_ADMINISTRATOR_SUCCESS,
  UPDATING_ADMINISTRATOR_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import AdministratorState from '../types/states/administrator';

const initialState: AdministratorState = {
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

const administratorReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      // const stateDiff = diff(state, action.payload) as any;
      // const wasBumpedOnClient =
      //   stateDiff?.administrator?.[0] === undefined;
      return Object.assign(
        {},
        state,
        action.payload.administrator,
      );

    case FETCHING_ADMINISTRATOR:
    case CREATING_ADMINISTRATOR:
    case UPDATING_ADMINISTRATOR:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ADMINISTRATOR_SUCCESS:
    case CREATING_ADMINISTRATOR_SUCCESS:
    case UPDATING_ADMINISTRATOR_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_ADMINISTRATOR_FAIL:
    case CREATING_ADMINISTRATOR_FAIL:
    case UPDATING_ADMINISTRATOR_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default administratorReducer;
