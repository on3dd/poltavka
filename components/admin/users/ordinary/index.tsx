import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import RootState from '../../../../types/states';
import User from '../../../../types/User';

import TableTemplate from '../table';

const Ordinary: React.FC = () => {
  const [id, setId] = useState(null);

  const users = useSelector(
    (state: RootState) => state.users,
  );

  const router = useRouter();

  const onAddClick = () => {
    router.push('/admin/queue/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/queue/edit/${id}`);
  };

  const onDeleteClick = () => {
    console.log('delete');
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: User[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(selectedRows[0].id);
    },
  };

  return (
    <TableTemplate
      dataSource={users.data}
      rowSelection={rowSelection}
      onAddClick={onAddClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default Ordinary;
