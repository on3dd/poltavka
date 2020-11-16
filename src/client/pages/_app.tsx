import { NextPage, NextComponentType } from 'next';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import wrapper from '../store';

import '../styles/antd.less';

const App: NextPage<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <NextNProgress color="#1890ff" />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
