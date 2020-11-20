import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_USER,
  UPDATING_USER_SUCCESS,
  UPDATING_USER_FAIL,
} from '../utils/actionTypes';

import Ordinary from '../types/Ordinary';

import { API_ENDPOINTS } from '../utils/constants';

const updateUser = (item: Ordinary) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_USER });

    const { id } = item;

    return axiosService
      .patch(API_ENDPOINTS.admin.users.ord.id(id), item)
      .then((res) => {
        dispatch({
          type: UPDATING_USER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_USER_FAIL,
          payload: err,
        });
      });
  };
};

export default updateUser;
