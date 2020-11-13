import React from 'react';

import AdminLayout from '../../../layouts/admin';
import QueueComponent from '../../../components/admin/queue';

const Queue: React.FC = () => {
  return (
    <AdminLayout>
      <QueueComponent />
    </AdminLayout>
  );
};

export default Queue;
