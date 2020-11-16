import React from 'react';

import wrapper from '../../../../../store';
import fetchDispatcher from '../../../../../actions/fetchDispatcher';

import AdminLayout from '../../../../../layouts/admin';
import EditComponent from '../../../../../components/admin/users/dispatchers/edit/[id]';

const Edit: React.FC = () => {
  return (
    <AdminLayout>
      <EditComponent />
    </AdminLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, params }) => {
    const { id } = params;

    if (id === 'new') return;

    if (!process.env.isProd) {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things',
      );
    }

    await store.dispatch(
      fetchDispatcher(Number(id)) as any,
    ); // see https://github.com/kirill-konshin/next-redux-wrapper/issues/207
  },
);

export default Edit;
