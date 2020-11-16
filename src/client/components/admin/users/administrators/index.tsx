import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import deleteAdministrator from '../../../../actions/deleteAdministrator';

import RootState from '../../../../types/states';
import AdministratorType from '../../../../types/Administrator';

import TableTemplate from '../table';

const Administrators: React.FC = () => {
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const administrators = useSelector(
    (state: RootState) => state.administrators,
  );

  const router = useRouter();

  const confirmLoading = useMemo(() => {
    return administrators.isFetching;
  }, [administrators.isFetching]);

  const onAddClick = () => {
    router.push('/admin/users/administrators/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/users/administrators/edit/${id}`);
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
    await dispatch(deleteAdministrator(id));

    closeModal();
  }, []);

  const handleCancel = useCallback(() => {
    closeModal();
  }, []);

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: AdministratorType[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(selectedRows[0].id);
    },
  };

  return (
    <TableTemplate
      id={id}
      dataSource={administrators.data}
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

export default Administrators;
