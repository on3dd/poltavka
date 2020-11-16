import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_USER,
  UPDATING_USER_SUCCESS,
  UPDATING_USER_FAIL,
} from '../utils/actionTypes';

import Ordinary from '../types/Ordinary';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const updateUser = (item: Ordinary) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_USER });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: UPDATING_USER_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_USER_FAIL,
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

export default updateUser;
