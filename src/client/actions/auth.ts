import { Action, Dispatch } from 'redux';

import Auth from '../types/Auth';

import axiosService from '../utils/axiosService';

import {
  AUTHENTICATION,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import Storage from '../utils/storage';

const storage = Storage.getInstance();

const auth = (data: Auth) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: AUTHENTICATION });

    return axiosService
      .post(API_ENDPOINTS.auth, data)
      .then((res) => {
        storage.set('token', res.data);

        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTHENTICATION_FAIL,
          payload: err,
        });
      });
  };
};

export default auth;
