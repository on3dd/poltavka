import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  UPDATING_QUEUE_ITEM,
  UPDATING_QUEUE_ITEM_SUCCESS,
  UPDATING_QUEUE_ITEM_FAIL,
} from '../utils/actionTypes';

import QueueItem from '../types/QueueItem';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const updateQueueItem = (item: QueueItem) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: UPDATING_QUEUE_ITEM });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: UPDATING_QUEUE_ITEM_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATING_QUEUE_ITEM_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: UPDATING_QUEUE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: UPDATING_QUEUE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default updateQueueItem;
