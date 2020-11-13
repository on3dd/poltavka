import React from 'react';
import { Table } from 'antd';

import { rowSelection, columns, data } from './table';

const Queue: React.FC = () => {
  return (
    <Table
      rowSelection={{
        type: 'checkbox',
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default Queue;
