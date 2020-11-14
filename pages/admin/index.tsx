import React from 'react';
import { useSelector } from 'react-redux';

import wrapper from '../../store';
import fetchPosts from '../../actions/fetchPosts';
import RootState from '../../types/states';

import AdminLayout from '../../layouts/admin';
import IndexComponent from '../../components/admin';

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    if (!process.env.isProd) {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things',
      );
    }

    await store.dispatch(fetchPosts() as any);
  },
);

const Admin: React.FC = () => {
  const posts = useSelector(
    (state: RootState) => state.posts,
  );

  console.log('admin posts', posts.data.length);

  return (
    <AdminLayout>
      <IndexComponent />
    </AdminLayout>
  );
};

export default Admin;
