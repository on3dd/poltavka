import React, { useState } from 'react';
import { useRouter } from 'next/router';

import FormTemplate from '../../form';

const EditById = () => {
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
    <FormTemplate
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // validateMessages={validateMessages}
    />
  );
};

export default EditById;
