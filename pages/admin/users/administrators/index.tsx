import React from 'react';

import AdminLayout from '../../../../layouts/admin/';
import AdministratorsComponent from '../../../../components/admin/users/administrators';

const Administrators: React.FC = () => {
  return (
    <AdminLayout>
      <AdministratorsComponent />
    </AdminLayout>
  );
};

export default Administrators;
