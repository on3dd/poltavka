import React from 'react';
import { useStore } from 'react-redux';

import wrapper from '../../store';
import fetchPosts from '../../actions/fetchPosts';

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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    if (!process.env.isProd) {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things',
      );
    }

    await store.dispatch(fetchPosts() as any); // see https://github.com/kirill-konshin/next-redux-wrapper/issues/207
  },
);

export default Admin;
