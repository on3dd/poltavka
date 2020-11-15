import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form } from 'antd';

import RootState from '../../../../types/states';
import QueueItem from '../../../../types/QueueItem';

import createQueueItem from '../../../../actions/createQueueItem';
import updateQueueItem from '../../../../actions/updateQueueItem';

import EditForm from './Form';

const EditById: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const queue_item = useSelector(
    (state: RootState) => state.queue_item,
  );

  const [initialValues, setInitialValues] = useState(
    queue_item.data,
  );

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('useEffect', queue_item.data);

    setInitialValues((prev) => ({
      ...prev,
      ...queue_item.data,
    }));

    form.setFieldsValue(queue_item.data);
  }, [queue_item.data]);

  const onValuesChange = (values: any) => {
    console.log('onValuesChange', values);

    setInitialValues((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const submitFunction = useCallback(
    (values) => {
      return initialValues.id
        ? updateQueueItem(values)
        : createQueueItem(values);
    },
    [initialValues.id],
  );

  const onFinish = async (values: QueueItem) => {
    console.log('Success:', values);

    await dispatch(submitFunction(values));

    if (initialValues.id) {
      await router.push(
        `/admin/queue/edit/${initialValues.id}`,
      );
    }
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
