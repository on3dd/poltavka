import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../../types/states';
import DispatcherType from '../../../../../types/Dispatcher';

import createDispatcher from '../../../../../actions/createDispatcher';
import updateDispatcher from '../../../../../actions/updateDispatcher';

import FormTemplate from '../../form';

const EditById = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const dispatcher = useSelector(
    (state: RootState) => state.dispatcher,
  );

  const [initialValues, setInitialValues] = useState(
    dispatcher.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect');

    setInitialValues((prev) => ({
      ...prev,
      ...dispatcher.data,
    }));

    form.setFieldsValue(dispatcher.data);
  }, [dispatcher.data]);

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
        ? updateDispatcher(values)
        : createDispatcher(values);
    },
    [initialValues.id],
  );

  const onFinish = async (values: DispatcherType) => {
    console.log('Success:', values);

    await dispatch(submitFunction(values));

    // if (initialValues.id) {
    //   await router.push(
    //     `/admin/users/dispatchers/edit/${initialValues.id}`,
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
