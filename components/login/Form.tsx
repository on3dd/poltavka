import React from 'react';
import {
  Form,
  Select,
  Input,
  Button,
  Checkbox,
} from 'antd';
import { parsePhoneNumber } from 'libphonenumber-js/mobile';

import Auth from '../../types/Auth';

const validateMessages = {
  required: '${label} не может быть пустым!',
  whitespace: '${label} не может быть пустым!',
  string: {
    len: '${label} должен состоять из ${len} символов!',
    min: '${label} должен быть длиной от ${min} символов!',
    max: '${label} должен быть длиной до ${max} characters',
  },
};

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
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="7">+7</Select.Option>
      </Select>
    </Form.Item>
  );

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
            required: true,
            whitespace: true,
            type: 'string',
            min: 10,
            max: 15,
            message:
              'Пожалуйста, заполните ваш номер телефона!',
            validator: (_, value) => {
              try {
                const phone = parsePhoneNumber(value, 'RU');
                return phone.isValid()
                  ? Promise.resolve()
                  : Promise.reject();
              } catch (err) {
                return Promise.reject();
              }
            },
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            whitespace: true,
            type: 'string',
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
