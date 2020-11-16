import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../../types/states';
import OrdinaryType from '../../../../../types/Ordinary';

import createUser from '../../../../../actions/createUser';
import updateUser from '../../../../../actions/updateUser';

import FormTemplate from '../../form';

const EditById = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const user = useSelector(
    (state: RootState) => state.user,
  );

  const [initialValues, setInitialValues] = useState(
    user.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues((prev) => ({
      ...prev,
      ...user.data,
    }));

    form.setFieldsValue(user.data);
  }, [user.data]);

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
        ? updateUser(values)
        : createUser(values);
    },
    [initialValues.id],
  );

  const onFinish = async (values: OrdinaryType) => {
    console.log('Success:', values);

    await dispatch(submitFunction(values));

    // if (initialValues.id) {
    //   await router.push(
    //     `/admin/users/ordinary/edit/${initialValues.id}`,
    //   );
    // }
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
