import React from 'react';

import AdminLayout from '../../../../layouts/admin/';
import DispatchersComponent from '../../../../components/admin/users/dispatchers';

const Dispatchers: React.FC = () => {
  return (
    <AdminLayout>
      <DispatchersComponent />
    </AdminLayout>
  );
};

export default Dispatchers;
