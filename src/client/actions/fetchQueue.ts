import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_QUEUE,
  FETCHING_QUEUE_SUCCESS,
  FETCHING_QUEUE_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';
import { data } from '../components/admin/queue/table';

const fetchQueue = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_QUEUE });

    return sleep(100)
      .then(() => {
        dispatch({
          type: FETCHING_QUEUE_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_QUEUE_FAIL,
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

export default fetchQueue;
