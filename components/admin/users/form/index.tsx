import React from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
} from 'antd';
import {
  FileProtectOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

import User from '../../../../types/User';
import Dispatcher from '../../../../types/Dispatcher';
import Administrator from '../../../../types/Administrator';

import { generatePassword } from './config';

type FormTemplateProps = {
  form: any;
  initialValues: User | Dispatcher | Administrator;
  onValuesChange: (value: any) => void;
  onFinish: (value: any) => void;
  onFinishFailed: (value: any) => void;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
  form,
  initialValues,
  onValuesChange,
  onFinish,
  onFinishFailed,
}: FormTemplateProps) => {
  return (
    <Form
      name="new"
      size="large"
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // validateMessages={validateMessages}
    >
      <Form.Item name="name" label="ФИО">
        <Input />
      </Form.Item>

      <Form.Item name="country" label="Гражданство">
        <Select>
          <Select.Option value="russia">
            Российская Федерация
          </Select.Option>
          <Select.Option value="china">
            Китайская Народная Республика
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="phone" label="Номер телефона">
        <Input />
      </Form.Item>

      {!initialValues.id && (
        <Form.Item name="password" label="Пароль">
          <Row justify="space-between">
            <Col flex="auto">
              <Input.Password />
            </Col>
            <Col flex="none" style={{ marginLeft: '1rem' }}>
              <Button
                type="default"
                icon={<FileProtectOutlined />}
                onClick={generatePassword}
              >
                Сгенерировать
              </Button>
            </Col>
          </Row>
        </Form.Item>
      )}

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<UserAddOutlined />}
        >
          {initialValues.id ? 'Изменить' : 'Добавить'}{' '}
          пользователя
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTemplate;
