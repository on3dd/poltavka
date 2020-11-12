import React from 'react';
import { Layout, Row, Col } from 'antd';

import LayoutProps from '../../types/props/layout';

const layout = {
  xs: {
    span: 24,
  },
  md: {
    span: 16,
  },
  lg: {
    span: 8,
  },
};

const Login: React.FC<LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <Layout
      className="login"
      style={{ minHeight: '100vh' }}
    >
      <Layout.Content
        className="login__layout"
        style={{
          height: '100%',
          padding: '80px 50px 50px 50px',
        }}
      >
        <div
          className="login__content"
          style={{
            height: 'inherit',
          }}
        >
          <Row justify="center">
            <Col {...layout}>{children}</Col>
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
