import { Action, Dispatch } from 'redux';

import Auth from '../types/Auth';

import axiosService from '../utils/axiosService';

import {
  AUTHENTICATION,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const auth = (data: Auth) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: AUTHENTICATION });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTHENTICATION_FAIL,
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
