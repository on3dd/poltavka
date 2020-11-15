import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_DISPATCHER,
  FETCHING_DISPATCHER_SUCCESS,
  FETCHING_DISPATCHER_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';
import { data } from '../components/admin/users/table/config';

const fetchDispatcher = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_DISPATCHER });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: FETCHING_DISPATCHER_SUCCESS,
          payload: data.find((el) => el.id === id),
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_DISPATCHER_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_QUEUE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_QUEUE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchDispatcher;
