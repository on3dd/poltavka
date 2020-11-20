import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_ADMINISTRATOR,
  FETCHING_ADMINISTRATOR_SUCCESS,
  FETCHING_ADMINISTRATOR_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchAdministrator = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_ADMINISTRATOR });

    return axiosService
      .get(API_ENDPOINTS.admin.users.adm.id(id))
      .then((res) => {
        dispatch({
          type: FETCHING_ADMINISTRATOR_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_ADMINISTRATOR_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchAdministrator;
