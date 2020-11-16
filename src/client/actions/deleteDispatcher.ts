import fetchDispatchers from './fetchDispatchers';

import axiosService from '../utils/axiosService';

import {
  DELETING_DISPATCHER,
  DELETING_DISPATCHER_SUCCESS,
  DELETING_DISPATCHER_FAIL,
  FETCHING_DISPATCHERS,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

import { Dispatch } from '../types/Thunk';

import { data } from '../components/admin/queue/table';

const deleteDispatcher = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_DISPATCHER });
    dispatch({ type: FETCHING_DISPATCHERS });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: DELETING_DISPATCHER_SUCCESS,
          payload: data.find((el) => el.id === id),
        });

        dispatch(fetchDispatchers());
      })
      .catch((err) => {
        dispatch({
          type: DELETING_DISPATCHER_FAIL,
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

export default deleteDispatcher;
