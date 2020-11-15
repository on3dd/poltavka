import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Typography } from 'antd';

import Auth from '../../types/Auth';
import auth from '../../actions/auth';

import LoginForm from '../form/Form';

const Div = styled.div``;

const Login: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    phone: '',
    password: '',
    prefix: '+7',
    remember: true,
  } as Auth);

  const onValuesChange = (values: any) => {
    console.log('onValuesChange', values);

    setInitialValues((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const onFinish = async (values: Auth) => {
    console.log('Success:', values);

    await dispatch(auth(values));
    await router.push('/admin');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Div className="login__container">
      <Typography.Title className="login__title">
        Вход
      </Typography.Title>
      <LoginForm
        initialValues={initialValues}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
    </Div>
  );
};

export default Login;
