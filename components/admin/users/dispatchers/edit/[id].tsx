import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../../types/states';
import DispatcherType from '../../../../../types/Dispatcher';

import FormTemplate from '../../form';

const EditById = () => {
  const router = useRouter();

  const dispatcher = useSelector(
    (state: RootState) => state.dispatcher,
  );

  const [initialValues, setInitialValues] = useState(
    dispatcher.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues(() => dispatcher.data);

    form.setFieldsValue(dispatcher.data);
  }, [dispatcher.data]);

  const onValuesChange = (values: any) => {
    console.log('onvaluechange', values);

    setInitialValues(values);
  };

  const onFinish = (values: DispatcherType) => {
    console.log('Success:', values);

    router.push('/admin');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <FormTemplate
      form={form}
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // validateMessages={validateMessages}
    />
  );
};

export default EditById;
