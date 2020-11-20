import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../../types/states';
import AdministratorType from '../../../../../types/Administrator';

import createAdministrator from '../../../../../actions/createAdministrator';
import updateAdministrator from '../../../../../actions/updateAdministrator';

import FormTemplate from '../../form';

const EditById = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const administrator = useSelector(
    (state: RootState) => state.administrator,
  );

  const [initialValues, setInitialValues] = useState(
    administrator.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues((prev) => ({
      ...prev,
      ...administrator.data,
    }));

    form.setFieldsValue(administrator.data);
  }, [administrator.data]);

  const onValuesChange = (values: any) => {
    console.log('onvaluechange', values);

    setInitialValues((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const submitFunction = useCallback(
    (values) => {
      return initialValues.id
        ? updateAdministrator(values)
        : createAdministrator(values);
    },
    [initialValues.id],
  );

  const onFinish = async (values: AdministratorType) => {
    console.log('Success:', values);

    await dispatch(submitFunction(values));
    await router.push('/admin/users/admininstrators');
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
