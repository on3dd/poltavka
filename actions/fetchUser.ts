import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';
import { data } from '../components/admin/users/table/config';

const fetchUser = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: FETCHING_USER });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: FETCHING_USER_SUCCESS,
          payload: data.find((el) => el.id === id),
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_USER_FAIL,
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

export default fetchUser;
