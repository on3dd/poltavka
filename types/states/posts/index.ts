import { NextPage } from 'next';

import NextState from '../next';
import Post from '../../Post';

export default interface SymbolsState extends NextState {
  data: Post[];
  isFetching: boolean;
  hasError: boolean;
  errorMessage: null | string;
}
