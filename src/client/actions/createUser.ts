import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  CREATING_USER,
  CREATING_USER_SUCCESS,
  CREATING_USER_FAIL,
} from '../utils/actionTypes';

import Ordinary from '../types/Ordinary';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const createUser = (item: Ordinary) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CREATING_USER });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: CREATING_USER_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATING_USER_FAIL,
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

export default createUser;
