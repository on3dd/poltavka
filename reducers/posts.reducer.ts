import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import {
  FETCHING_POSTS,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POSTS_FAIL,
} from '../utils/actionTypes';

import AsyncAction from '../types/AsyncAction';
import PostsState from '../types/states/posts';

const initialState: PostsState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const postsReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE action:', action);

      const stateDiff = diff(state, action.payload) as any;
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith(
        'X',
      ); // or any other criteria
      return Object.assign(
        {},
        state,
        action.payload.posts,
        {
          page: wasBumpedOnClient
            ? state.page
            : action.payload.page, // keep existing state or use hydrated
        },
      );

    case FETCHING_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POSTS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_POSTS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default postsReducer;
