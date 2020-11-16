import fetchQueue from './fetchQueue';

import axiosService from '../utils/axiosService';

import {
  DELETING_QUEUE_ITEM,
  DELETING_QUEUE_ITEM_SUCCESS,
  DELETING_QUEUE_ITEM_FAIL,
  FETCHING_QUEUE,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

import { Dispatch } from '../types/Thunk';

import { data } from '../components/admin/queue/table';

const deleteQueueItem = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_QUEUE_ITEM });
    dispatch({ type: FETCHING_QUEUE });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: DELETING_QUEUE_ITEM_SUCCESS,
          payload: data.find((el) => el.id === id),
        });

        dispatch(fetchQueue());
      })
      .catch((err) => {
        dispatch({
          type: DELETING_QUEUE_ITEM_FAIL,
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

export default deleteQueueItem;
