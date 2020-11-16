import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  CREATING_ADMINISTRATOR,
  CREATING_ADMINISTRATOR_SUCCESS,
  CREATING_ADMINISTRATOR_FAIL,
} from '../utils/actionTypes';

import Administrator from '../types/Administrator';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const updateAdministrator = (item: Administrator) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CREATING_ADMINISTRATOR });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: CREATING_ADMINISTRATOR_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATING_ADMINISTRATOR_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: CREATING_QUEUE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: CREATING_QUEUE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default updateAdministrator;
