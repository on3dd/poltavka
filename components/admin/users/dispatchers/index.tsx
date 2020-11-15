import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import RootState from '../../../../types/states';
import DispatcherType from '../../../../types/Dispatcher';

import TableTemplate from '../table';

const Dispatchers: React.FC = () => {
  const [id, setId] = useState(null);

  const dispatchers = useSelector(
    (state: RootState) => state.dispatchers,
  );

  const router = useRouter();

  const onAddClick = () => {
    router.push('/admin/users/dispatchers/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/users/dispatchers/edit/${id}`);
  };

  const onDeleteClick = () => {
    console.log('delete');
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: DispatcherType[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(selectedRows[0].id);
    },
  };

  return (
    <TableTemplate
      id={id}
      dataSource={dispatchers.data}
      rowSelection={rowSelection}
      onAddClick={onAddClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default Dispatchers;
