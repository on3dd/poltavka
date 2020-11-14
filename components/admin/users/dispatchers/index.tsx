import React from 'react';
import { useRouter } from 'next/router';

import TableTemplate from '../table';

const Dispatchers: React.FC = () => {
  const router = useRouter();

  const onAddClick = () => {
    router.push('/admin/users/dispatchers/edit/new');
  };

  const onEditClick = () => {
    console.log('edit');
  };

  const onDeleteClick = () => {
    console.log('delete');
  };

  return (
    <TableTemplate
      onAddClick={onAddClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    />
  );
};

export default Dispatchers;
