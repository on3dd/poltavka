import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import LoginForm from './Form';

const Div = styled.div``;

const Login: React.FC = () => {
  return (
    <Div className="login__container">
      <Typography.Title className="login__title">
        Вход
      </Typography.Title>
      <LoginForm />
    </Div>
  );
};

export default Login;
