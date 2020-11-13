import React from 'react';

import AdminLayout from '../../../../layouts/admin/';
import OrdinaryComponent from '../../../../components/admin/users/ordinary';

const Ordinary: React.FC = () => {
  return (
    <AdminLayout>
      <OrdinaryComponent />
    </AdminLayout>
  );
};

export default Ordinary;
