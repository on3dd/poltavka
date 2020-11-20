import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_ADMINISTRATORS,
  FETCHING_ADMINISTRATORS_SUCCESS,
  FETCHING_ADMINISTRATORS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchDispatchers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_ADMINISTRATORS });

    return axiosService
      .get(API_ENDPOINTS.admin.users.adm.index)
      .then((res) => {
        dispatch({
          type: FETCHING_ADMINISTRATORS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_ADMINISTRATORS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchDispatchers;
