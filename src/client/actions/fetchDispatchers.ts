import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_DISPATCHERS,
  FETCHING_DISPATCHERS_SUCCESS,
  FETCHING_DISPATCHERS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';
import { data } from '../components/admin/users/table/config';

const fetchDispatchers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_DISPATCHERS });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: FETCHING_DISPATCHERS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_DISPATCHERS_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_DISPATCHERS_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_DISPATCHERS_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchDispatchers;
