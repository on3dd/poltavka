import { NextPage, NextComponentType } from 'next';
import NextNProgress from 'nextjs-progressbar';

import '../styles/antd.less';

type AppProps = {
  Component: NextComponentType;
  pageProps: unknown;
};

const App: NextPage<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <NextNProgress color="#1890ff" />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
