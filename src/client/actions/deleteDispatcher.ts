import fetchDispatchers from './fetchDispatchers';

import axiosService from '../utils/axiosService';

import {
  DELETING_DISPATCHER,
  DELETING_DISPATCHER_SUCCESS,
  DELETING_DISPATCHER_FAIL,
  FETCHING_DISPATCHERS,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

import { Dispatch } from '../types/Thunk';

const deleteDispatcher = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_DISPATCHER });
    dispatch({ type: FETCHING_DISPATCHERS });

    return axiosService
      .delete(API_ENDPOINTS.admin.users.dis.id(id))
      .then((res) => {
        dispatch({
          type: DELETING_DISPATCHER_SUCCESS,
          payload: res.data,
        });

        dispatch(fetchDispatchers());
      })
      .catch((err) => {
        dispatch({
          type: DELETING_DISPATCHER_FAIL,
          payload: err,
        });
      });
  };
};

export default deleteDispatcher;
