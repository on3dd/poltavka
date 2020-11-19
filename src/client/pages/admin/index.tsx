import React from 'react';
import { useStore } from 'react-redux';

import security from '../../utils/security';

import AdminLayout from '../../layouts/admin';
import IndexComponent from '../../components/admin';

const Admin: React.FC = () => {
  const store = useStore();

  console.log('state', store.getState());

  return (
    <AdminLayout>
      <IndexComponent />
    </AdminLayout>
  );
};

export const getServerSideProps = security;

export default Admin;
