import React from 'react';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Switch,
} from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import QueueItem from '../../../../types/QueueItem';

import { validateMessages } from '../../../form';

type EditFormProps = {
  form: any;
  initialValues: QueueItem;
  onValuesChange: (values: any) => void;
  onFinish: (values: QueueItem) => void;
  onFinishFailed: (values: any) => void;
};

const EditForm: React.FC<EditFormProps> = ({
  form,
  initialValues,
  onValuesChange,
  onFinish,
  onFinishFailed,
}: EditFormProps) => {
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
      validateMessages={validateMessages}
    >
      {!!initialValues.id && (
        <Form.Item
          name="number"
          label="Номер в очереди"
          rules={[
            {
              type: 'number',
              required: true,
              min: 1,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      )}

      <Form.Item
        name="driver"
        label="Водитель"
        rules={[
          {
            type: 'string',
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="Путин В. В.">
            Владимир Владимирович Путин
          </Select.Option>
          <Select.Option value="Обама Б. Х.">
            Барак Хуссейн Обама
          </Select.Option>
          <Select.Option value="Ишутин А. Я.">
            Ишутин Артем Ягуарович
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="car_number"
        label="Номер автомобиля"
        rules={[
          {
            type: 'string',
            required: true,
            min: 7,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="isOwner"
        valuePropName="checked"
        label="Водитель - собственник автомобиля"
        rules={[
          {
            type: 'boolean',
          },
        ]}
      >
        <Switch />
      </Form.Item>

      {!initialValues.isOwner && (
        <Form.Item
          name="car_owner"
          label="Собственник автомобиля"
          rules={[
            {
              type: 'string',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      )}

      <Form.Item
        name="product"
        label="Товар"
        rules={[
          {
            type: 'string',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="car_location"
        label="Местоположение автомобиля"
        rules={[
          {
            type: 'string',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="car_status"
        label="Статус"
        rules={[
          {
            type: 'string',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<UserAddOutlined />}
        >
          {initialValues.id
            ? 'Изменить пользователя в очереди'
            : 'Добавить пользователя в очередь'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
