import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_DISPATCHERS,
  FETCHING_DISPATCHERS_SUCCESS,
  FETCHING_DISPATCHERS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchDispatchers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_DISPATCHERS });

    return axiosService
      .get(API_ENDPOINTS.admin.users.dis.index)
      .then((res) => {
        dispatch({
          type: FETCHING_DISPATCHERS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_DISPATCHERS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchDispatchers;
