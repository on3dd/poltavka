import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../types/states';
import QueueItem from '../../../../types/QueueItem';

import EditForm from './Form';

const EditById: React.FC = () => {
  const router = useRouter();

  const queue_item = useSelector(
    (state: RootState) => state.queue_item,
  );

  const [initialValues, setInitialValues] = useState(
    queue_item.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues(() => queue_item.data);

    form.setFieldsValue(queue_item.data);
  }, [queue_item.data]);

  const onValuesChange = (values: any) => {
    console.log('onValuesChange', values);

    setInitialValues(() => ({ ...values }));
  };

  const onFinish = (values: QueueItem) => {
    console.log('Success:', values);

    router.push('/admin');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <EditForm
      form={form}
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    />
  );
};

export default EditById;
