import { Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';
import { data } from '../components/admin/users/table/config';

const fetchUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCHING_USERS });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: FETCHING_USERS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_USERS_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_USERS_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_USERS_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchUsers;
