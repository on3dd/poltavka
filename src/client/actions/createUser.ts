import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  CREATING_USER,
  CREATING_USER_SUCCESS,
  CREATING_USER_FAIL,
} from '../utils/actionTypes';

import Ordinary from '../types/Ordinary';

import { API_ENDPOINTS } from '../utils/constants';

const createUser = (item: Ordinary) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CREATING_USER });

    return axiosService
      .post(API_ENDPOINTS.admin.users.ord.index, item)
      .then((res) => {
        dispatch({
          type: CREATING_USER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATING_USER_FAIL,
          payload: err,
        });
      });
  };
};

export default createUser;
