import React from 'react';

import wrapper from '../../../../store';
import fetchUsers from '../../../../actions/fetchUsers';

import AdminLayout from '../../../../layouts/admin/';
import OrdinaryComponent from '../../../../components/admin/users/ordinary';

const Ordinary: React.FC = () => {
  return (
    <AdminLayout>
      <OrdinaryComponent />
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

    await store.dispatch(fetchUsers() as any);
  },
);

export default Ordinary;
