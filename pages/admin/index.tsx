import React from 'react';

import AdminLayout from '../../layouts/admin';
import IndexComponent from '../../components/admin';

const Admin: React.FC = () => {
  return (
    <AdminLayout>
      <IndexComponent />
    </AdminLayout>
  );
};

export default Admin;
