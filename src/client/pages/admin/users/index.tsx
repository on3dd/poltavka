import React from 'react';

import AdminLayout from '../../../layouts/admin';
import UsersComponent from '../../../components/admin/users';

const Users: React.FC = () => {
  return (
    <AdminLayout>
      <UsersComponent />
    </AdminLayout>
  );
};

export default Users;
