import React from 'react';

import wrapper from '../../../../store';
import fetchDispatchers from '../../../../actions/fetchDispatchers';

import AdminLayout from '../../../../layouts/admin';
import DispatchersComponent from '../../../../components/admin/users/dispatchers';

const Dispatchers: React.FC = () => {
  return (
    <AdminLayout>
      <DispatchersComponent />
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

    await store.dispatch(fetchDispatchers() as any);
  },
);

export default Dispatchers;
