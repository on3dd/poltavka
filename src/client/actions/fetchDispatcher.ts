import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_DISPATCHER,
  FETCHING_DISPATCHER_SUCCESS,
  FETCHING_DISPATCHER_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchDispatcher = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_DISPATCHER });

    return axiosService
      .get(API_ENDPOINTS.admin.users.dis.id(id))
      .then((res) => {
        dispatch({
          type: FETCHING_DISPATCHER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_DISPATCHER_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchDispatcher;
