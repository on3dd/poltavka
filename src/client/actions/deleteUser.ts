import fetchUsers from './fetchUsers';

import axiosService from '../utils/axiosService';

import {
  DELETING_USER,
  DELETING_USER_SUCCESS,
  DELETING_USER_FAIL,
  FETCHING_USERS,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

import { Dispatch } from '../types/Thunk';

const deleteUser = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_USER });
    dispatch({ type: FETCHING_USERS });

    return axiosService
      .delete(API_ENDPOINTS.admin.users.ord.id(id))
      .then((res) => {
        dispatch({
          type: DELETING_USER_SUCCESS,
          payload: res.data,
        });

        dispatch(fetchUsers());
      })
      .catch((err) => {
        dispatch({
          type: DELETING_USER_FAIL,
          payload: err,
        });
      });
  };
};

export default deleteUser;
