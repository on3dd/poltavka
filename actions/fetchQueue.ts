import { Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_QUEUE,
  FETCHING_QUEUE_SUCCESS,
  FETCHING_QUEUE_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';
import { data } from '../components/admin/queue/table';

const fetchPosts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCHING_QUEUE });

    await sleep(2000);

    dispatch({
      type: FETCHING_QUEUE_SUCCESS,
      payload: data,
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

export default fetchPosts;
