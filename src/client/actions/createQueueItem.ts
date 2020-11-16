import { Action, Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  CREATING_QUEUE_ITEM,
  CREATING_QUEUE_ITEM_SUCCESS,
  CREATING_QUEUE_ITEM_FAIL,
} from '../utils/actionTypes';

import QueueItem from '../types/QueueItem';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const createQueueItem = (item: QueueItem) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: CREATING_QUEUE_ITEM });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: CREATING_QUEUE_ITEM_SUCCESS,
          payload: item,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATING_QUEUE_ITEM_FAIL,
          payload: err,
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.queue)
    //   .then((res) => {
    //     dispatch({
    //       type: CREATING_QUEUE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: CREATING_QUEUE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default createQueueItem;
