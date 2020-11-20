import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  CREATING_ADMINISTRATOR,
  CREATING_ADMINISTRATOR_SUCCESS,
  CREATING_ADMINISTRATOR_FAIL,
} from '../utils/actionTypes';

import Administrator from '../types/Administrator';

import { API_ENDPOINTS } from '../utils/constants';

const updateAdministrator = (item: Administrator) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CREATING_ADMINISTRATOR });

    return axiosService
      .post(API_ENDPOINTS.admin.users.adm.index, item)
      .then((res) => {
        dispatch({
          type: CREATING_ADMINISTRATOR_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATING_ADMINISTRATOR_FAIL,
          payload: err,
        });
      });
  };
};

export default updateAdministrator;
