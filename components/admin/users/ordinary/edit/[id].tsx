import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../../types/states';
import OrdinaryType from '../../../../../types/Ordinary';

import FormTemplate from '../../form';

const EditById = () => {
  const router = useRouter();

  const user = useSelector(
    (state: RootState) => state.user,
  );

  const [initialValues, setInitialValues] = useState(
    user.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues(() => user.data);

    form.setFieldsValue(user.data);
  }, [user.data]);

  const onValuesChange = (values: any) => {
    console.log('onvaluechange', values);

    setInitialValues(values);
  };

  const onFinish = (values: OrdinaryType) => {
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
