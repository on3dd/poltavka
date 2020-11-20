import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_USERS });

    return axiosService
      .get(API_ENDPOINTS.admin.users.ord.index)
      .then((res) => {
        dispatch({
          type: FETCHING_USERS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_USERS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchUsers;
