import React from 'react';
import { useSelector } from 'react-redux';

import RootState from '../../../types/states';

import AdminLayout from '../../../layouts/admin';
import QueueComponent from '../../../components/admin/queue';

const Queue: React.FC = () => {
  const posts = useSelector(
    (state: RootState) => state.posts,
  );

  console.log('queue posts', posts.data.length);

  return (
    <AdminLayout>
      <QueueComponent />
    </AdminLayout>
  );
};

export default Queue;
