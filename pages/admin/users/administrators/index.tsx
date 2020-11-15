import React from 'react';

import wrapper from '../../../../store';
import fetchAdministrators from '../../../../actions/fetchAdministrators';

import AdminLayout from '../../../../layouts/admin/';
import AdministratorsComponent from '../../../../components/admin/users/administrators';

const Administrators: React.FC = () => {
  return (
    <AdminLayout>
      <AdministratorsComponent />
    </AdminLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    if (!process.env.isProd) {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things',
      );
    }

    await store.dispatch(fetchAdministrators() as any);
  },
);

export default Administrators;
