import fetchAdministrators from './fetchAdministrators';

import axiosService from '../utils/axiosService';

import {
  DELETING_ADMINISTRATOR,
  DELETING_ADMINISTRATOR_SUCCESS,
  DELETING_ADMINISTRATOR_FAIL,
  FETCHING_ADMINISTRATORS,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

import { Dispatch } from '../types/Thunk';

const deleteAdministrator = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DELETING_ADMINISTRATOR });
    dispatch({ type: FETCHING_ADMINISTRATORS });

    return axiosService
      .delete(API_ENDPOINTS.admin.users.adm.id(id))
      .then((res) => {
        dispatch({
          type: DELETING_ADMINISTRATOR_SUCCESS,
          payload: res.data,
        });

        dispatch(fetchAdministrators());
      })
      .catch((err) => {
        dispatch({
          type: DELETING_ADMINISTRATOR_FAIL,
          payload: err,
        });
      });
  };
};

export default deleteAdministrator;
