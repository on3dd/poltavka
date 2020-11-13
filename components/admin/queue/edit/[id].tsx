import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button, Select, Switch } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const FormSizeDemo = () => {
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    isOwner: true,
  });

  const onValuesChange = (values: any) => {
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
      onValuesChange={onValuesChange}
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

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<UserAddOutlined />}
        >
          Добавить в очередь
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSizeDemo;
