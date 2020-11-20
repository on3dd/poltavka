import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_DISPATCHER,
  UPDATING_DISPATCHER_SUCCESS,
  UPDATING_DISPATCHER_FAIL,
} from '../utils/actionTypes';

import Dispatcher from '../types/Dispatcher';

import { API_ENDPOINTS } from '../utils/constants';

const updateDispatcher = (item: Dispatcher) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_DISPATCHER });

    const { id } = item;

    return axiosService
      .patch(API_ENDPOINTS.admin.users.dis.id(id), item)
      .then((res) => {
        dispatch({
          type: UPDATING_DISPATCHER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_DISPATCHER_FAIL,
          payload: err,
        });
      });
  };
};

export default updateDispatcher;
