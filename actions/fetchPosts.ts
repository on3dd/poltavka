import { Dispatch } from 'redux';

import axiosService from '../utils/axiosService';

import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchPosts = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: FETCHING_POSTS });

    return axiosService
      .get(API_ENDPOINTS.posts)
      .then((res) => {
        dispatch({
          type: FETCHING_POSTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_POSTS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchPosts;
