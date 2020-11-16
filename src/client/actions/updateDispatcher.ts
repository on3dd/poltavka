import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_DISPATCHER,
  UPDATING_DISPATCHER_SUCCESS,
  UPDATING_DISPATCHER_FAIL,
} from '../utils/actionTypes';

import Dispatcher from '../types/Dispatcher';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const updateDispatcher = (item: Dispatcher) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_DISPATCHER });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: UPDATING_DISPATCHER_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_DISPATCHER_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: UPDATING_QUEUE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: UPDATING_QUEUE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default updateDispatcher;
