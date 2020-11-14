import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form, Input, Button, Select, Switch } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import fetchQueueItem from '../../../../actions/fetchQueueItem';
import RootState from '../../../../types/states';

const EditById = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const queue_item = useSelector(
    (state: RootState) => state.queue_item,
  );

  const [initialValues, setInitialValues] = useState({
    ...queue_item.data,
  });

  const [form] = Form.useForm();

  const id = useMemo(() => {
    return router.query.id === 'new'
      ? 'new'
      : Number(router.query.id);
  }, [router.query.id]);

  useEffect(() => {
    if (id === 'new') return;
    if (id === queue_item.data.id) return;

    console.log('useEffect 1');

    dispatch(fetchQueueItem(id));
  }, [router.query.id, queue_item.data.id]);

  useEffect(() => {
    console.log('useEffect 2');

    setInitialValues(() => ({
      ...queue_item.data,
    }));

    form.setFieldsValue(initialValues);
  }, [queue_item.data]);

  const onValuesChange = (values: any) => {
    console.log('onValuesChange', values);

    setInitialValues(() => ({ ...values }));
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
      form={form}
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // validateMessages={validateMessages}
    >
      <Form.Item name="driver" label="Водитель">
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

      <Form.Item name="car_number" label="Номер автомобиля">
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
        <Form.Item
          name="car_owner"
          label="Собственник автомобиля"
        >
          <Input />
        </Form.Item>
      )}

      <Form.Item name="product" label="Товар">
        <Input />
      </Form.Item>

      <Form.Item
        name="car_location"
        label="Местоположение автомобиля"
      >
        <Input />
      </Form.Item>

      <Form.Item name="car_status" label="Статус">
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

export default EditById;
