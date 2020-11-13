import React from 'react';

import AdminLayout from '../../../../../layouts/admin/';
import EditComponent from '../../../../../components/admin/users/ordinary/edit/[id]';

const Edit: React.FC = () => {
  return (
    <AdminLayout>
      <EditComponent />
    </AdminLayout>
  );
};

export default Edit;
