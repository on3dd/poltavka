import fetchAdministrators from './fetchAdministrators';

import axiosService from '../utils/axiosService';

import {
  DELETING_ADMINISTRATOR,
  DELETING_ADMINISTRATOR_SUCCESS,
  DELETING_ADMINISTRATOR_FAIL,
  FETCHING_ADMINISTRATORS,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

import { Dispatch } from '../types/Thunk';

import { data } from '../components/admin/queue/table';

const deleteAdministrator = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_ADMINISTRATOR });
    dispatch({ type: FETCHING_ADMINISTRATORS });

    return sleep(2000)
      .then(() => {
        dispatch({
          type: DELETING_ADMINISTRATOR_SUCCESS,
          payload: data.find((el) => el.id === id),
        });

        dispatch(fetchAdministrators());
      })
      .catch((err) => {
        dispatch({
          type: DELETING_ADMINISTRATOR_FAIL,
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

export default deleteAdministrator;
