import React from 'react';

import AdminLayout from '../../../../../layouts/admin/';
import EditComponent from '../../../../../components/admin/users/administrators/edit/[id]';

const Edit: React.FC = () => {
  return (
    <AdminLayout>
      <EditComponent />
    </AdminLayout>
  );
};

export default Edit;
