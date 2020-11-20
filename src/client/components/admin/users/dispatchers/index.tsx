import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import deleteDispatcher from '../../../../actions/deleteDispatcher';

import RootState from '../../../../types/states';
import DispatcherType from '../../../../types/Dispatcher';

import TableTemplate from '../table';

const Dispatchers: React.FC = () => {
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const dispatchers = useSelector(
    (state: RootState) => state.dispatchers,
  );

  const router = useRouter();

  const confirmLoading = useMemo(() => {
    return dispatchers.isFetching;
  }, [dispatchers.isFetching]);

  const onAddClick = () => {
    router.push('/admin/users/dispatchers/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/users/dispatchers/edit/${id}`);
  };

  const openModal = useCallback(() => {
    setVisible(() => true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(() => false);
  }, []);

  const onDeleteClick = useCallback(() => {
    openModal();
  }, []);

  const handleOk = useCallback(async () => {
    await dispatch(deleteDispatcher(id));

    closeModal();
  }, [id]);

  const handleCancel = useCallback(() => {
    closeModal();
  }, []);

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: DispatcherType[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(() => selectedRows[0].id);
    },
  };

  return (
    <TableTemplate
      id={id}
      dataSource={dispatchers.data}
      rowSelection={rowSelection}
      visible={visible}
      confirmLoading={confirmLoading}
      onAddClick={onAddClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
};

export default Dispatchers;
