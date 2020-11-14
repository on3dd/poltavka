import { Dispatch } from 'redux';

import Auth from '../types/Auth';

import axiosService from '../utils/axiosService';

import {
  AUTH,
  AUTH_SUCCESS,
  AUTH_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const auth = (data: Auth) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: AUTH });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: AUTH_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.login)
    //   .then((res) => {
    //     dispatch({
    //       type: AUTH_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: AUTH_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default auth;
