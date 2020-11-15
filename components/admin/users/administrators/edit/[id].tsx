import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../../types/states';
import AdministratorType from '../../../../../types/Administrator';

import FormTemplate from '../../form';

const EditById = () => {
  const router = useRouter();

  const administrator = useSelector(
    (state: RootState) => state.administrator,
  );

  const [initialValues, setInitialValues] = useState(
    administrator.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues(() => administrator.data);

    form.setFieldsValue(administrator.data);
  }, [administrator.data]);

  const onValuesChange = (values: any) => {
    console.log('onvaluechange', values);

    setInitialValues(values);
  };

  const onFinish = (values: AdministratorType) => {
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
