import axiosService from '../utils/axiosService';

import {
  DELETING_USER,
  DELETING_USER_SUCCESS,
  DELETING_USER_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

import { Dispatch } from '../types/Thunk';

import { data } from '../components/admin/queue/table';

const deleteUser = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_USER });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: DELETING_USER_SUCCESS,
          payload: data.find((el) => el.id === id),
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETING_USER_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: DELETING_QUEUE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: DELETING_QUEUE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default deleteUser;
