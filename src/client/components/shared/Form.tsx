import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import Auth from '../../types/Auth';

import { validateMessages, phoneValidator } from './index';
import PrefixSelector from './prefix';

type LoginFormProps = {
  initialValues: Auth;
  onValuesChange: (values: any) => void;
  onFinish: (values: Auth) => void;
  onFinishFailed: (values: any) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  initialValues,
  onValuesChange,
  onFinish,
  onFinishFailed,
}: LoginFormProps) => {
  return (
    <Form
      name="login"
      size="large"
      layout={'vertical'}
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      className="login__form"
    >
      <Form.Item
        label="Номер телефона"
        name="phone"
        rules={[
          {
            type: 'string',
            required: true,
            whitespace: true,
            min: 10,
            max: 15,
            message:
              'Пожалуйста, заполните ваш номер телефона!',
            validator: phoneValidator,
          },
        ]}
      >
        <Input
          addonBefore={PrefixSelector}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            type: 'string',
            required: true,
            whitespace: true,
            len: 6,
            // message: 'Пожалуйста, введите ваш пароль!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
