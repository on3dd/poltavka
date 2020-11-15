import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_ADMINISTRATOR,
  UPDATING_ADMINISTRATOR_SUCCESS,
  UPDATING_ADMINISTRATOR_FAIL,
} from '../utils/actionTypes';

import Administrator from '../types/Administrator';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const updateAdministrator = (item: Administrator) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_ADMINISTRATOR });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: UPDATING_ADMINISTRATOR_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_ADMINISTRATOR_FAIL,
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

export default updateAdministrator;
