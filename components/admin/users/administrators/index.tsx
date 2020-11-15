import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import RootState from '../../../../types/states';
import Administrator from '../../../../types/Administrator';

import TableTemplate from '../table';

const Administrators: React.FC = () => {
  const [id, setId] = useState(null);

  const administrators = useSelector(
    (state: RootState) => state.administrators,
  );

  const router = useRouter();

  const onAddClick = () => {
    router.push('/admin/users/administrators/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/users/administrators/edit/${id}`);
  };

  const onDeleteClick = () => {
    console.log('delete');
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: Administrator[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(selectedRows[0].id);
    },
  };

  return (
    <TableTemplate
      dataSource={administrators.data}
      rowSelection={rowSelection}
      onAddClick={onAddClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default Administrators;
