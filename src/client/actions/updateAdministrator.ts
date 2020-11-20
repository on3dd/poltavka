import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_ADMINISTRATOR,
  UPDATING_ADMINISTRATOR_SUCCESS,
  UPDATING_ADMINISTRATOR_FAIL,
} from '../utils/actionTypes';

import Administrator from '../types/Administrator';

import { API_ENDPOINTS } from '../utils/constants';

const updateAdministrator = (item: Administrator) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_ADMINISTRATOR });

    const { id } = item;

    return axiosService
      .patch(API_ENDPOINTS.admin.users.adm.id(id), item)
      .then((res) => {
        dispatch({
          type: UPDATING_ADMINISTRATOR_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_ADMINISTRATOR_FAIL,
          payload: err,
        });
      });
  };
};

export default updateAdministrator;
