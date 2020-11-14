import React from 'react';
import { useSelector } from 'react-redux';

import wrapper from '../../../store';
import fetchQueue from '../../../actions/fetchQueue';
import RootState from '../../../types/states';

import AdminLayout from '../../../layouts/admin';
import QueueComponent from '../../../components/admin/queue';

const Queue: React.FC = () => {
  const queue = useSelector(
    (state: RootState) => state.queue,
  );

  console.log('queue', queue);

  return (
    <AdminLayout>
      <QueueComponent />
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

    await store.dispatch(fetchQueue() as any);
  },
);

export default Queue;
