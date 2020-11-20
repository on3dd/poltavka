import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  CREATING_DISPATCHER,
  CREATING_DISPATCHER_SUCCESS,
  CREATING_DISPATCHER_FAIL,
} from '../utils/actionTypes';

import Dispatcher from '../types/Dispatcher';

import { API_ENDPOINTS } from '../utils/constants';

const updateDispatcher = (item: Dispatcher) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CREATING_DISPATCHER });

    return axiosService
      .post(API_ENDPOINTS.admin.users.dis.index, item)
      .then((res) => {
        dispatch({
          type: CREATING_DISPATCHER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATING_DISPATCHER_FAIL,
          payload: err,
        });
      });
  };
};

export default updateDispatcher;
