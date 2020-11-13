import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  TreeSelect,
  Switch,
} from 'antd';
import { useRouter } from 'next/router';
const FormSizeDemo = () => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    isOwner: true,
  });

  const onValueChange = (values: any) => {
    console.log('onvaluechange', values);

    setInitialValues(values);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);

    router.push('/admin');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="new"
      size="large"
      layout="vertical"
      initialValues={initialValues}
      onValuesChange={onValueChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // validateMessages={validateMessages}
    >
      <Form.Item label="Водитель">
        <Select>
          <Select.Option value="russia">
            Владимир Владимирович Путин
          </Select.Option>
          <Select.Option value="china">
            Барак Хуссейн Обама
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Страна">
        <Select>
          <Select.Option value="russia">
            Российская Федерация
          </Select.Option>
          <Select.Option value="china">
            Китайская Народная Республика
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Номер автомобиля">
        <Input />
      </Form.Item>
      <Form.Item
        name="isOwner"
        valuePropName="checked"
        label="Водитель - собственник автомобиля"
      >
        <Switch />
      </Form.Item>
      {!initialValues.isOwner && (
        <Form.Item label="Собственник автомобиля">
          <Input />
        </Form.Item>
      )}
      <Form.Item label="Товар">
        <Input />
      </Form.Item>
      <Form.Item label="Местоположение автомобиля">
        <Input />
      </Form.Item>
      <Form.Item label="Статус">
        <Input />
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSizeDemo;
