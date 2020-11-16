import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import deleteUser from '../../../../actions/deleteUser';

import RootState from '../../../../types/states';
import OrdinaryType from '../../../../types/Ordinary';

import TableTemplate from '../table';

const Ordinary: React.FC = () => {
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector(
    (state: RootState) => state.users,
  );

  const router = useRouter();

  const confirmLoading = useMemo(() => {
    return users.isFetching;
  }, [users.isFetching]);

  const onAddClick = () => {
    router.push('/admin/users/ordinary/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/users/ordinary/edit/${id}`);
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
    await dispatch(deleteUser(id));

    closeModal();
  }, []);

  const handleCancel = useCallback(() => {
    closeModal();
  }, []);

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: OrdinaryType[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(selectedRows[0].id);
    },
  };

  return (
    <TableTemplate
      id={id}
      dataSource={users.data}
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

export default Ordinary;
