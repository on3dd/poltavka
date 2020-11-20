import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchUser = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_USER });

    return axiosService
      .get(API_ENDPOINTS.admin.users.ord.id(id))
      .then((res) => {
        dispatch({
          type: FETCHING_USER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_USER_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchUser;
