import React from 'react';
import { useSelector } from 'react-redux';

import wrapper from '../../../../store';
import fetchQueueItem from '../../../../actions/fetchQueueItem';
import RootState from '../../../../types/states';

import AdminLayout from '../../../../layouts/admin/';
import EditComponent from '../../../../components/admin/queue/edit/[id]';

const Edit: React.FC = () => {
  const item = useSelector(
    (state: RootState) => state.queue_item,
  );

  console.log('item', item);

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

    await store.dispatch(fetchQueueItem(Number(id)) as any); // see https://github.com/kirill-konshin/next-redux-wrapper/issues/207
  },
);

export default Edit;
