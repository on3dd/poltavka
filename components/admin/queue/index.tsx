import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Row, Col, Space, Button, Table } from 'antd';
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import RootState from '../../../types/states';
import QueueItem from '../../../types/QueueItem';

import { columns } from './table';

const Queue: React.FC = () => {
  const [id, setId] = useState(null);

  const queue = useSelector(
    (state: RootState) => state.queue,
  );

  const router = useRouter();

  const onAddClick = () => {
    router.push('/admin/queue/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/queue/edit/${id}`);
  };

  const onDeleteClick = () => {
    console.log('delete');
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: any[],
      selectedRows: QueueItem[],
    ) => {
      console.log('id', selectedRows[0].id);
      setId(selectedRows[0].id);
    },
  };

  return (
    <>
      <Row
        justify="space-between"
        style={{ marginBottom: 16 }}
      >
        <Col>
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={onAddClick}
          >
            Добавить в очередь
          </Button>
        </Col>
        <Col>
          <Space>
            <Button
              type="default"
              icon={<EditOutlined />}
              disabled={id === null}
              onClick={onEditClick}
            >
              Редактировать
            </Button>
            <Button
              type="primary"
              danger={true}
              icon={<DeleteOutlined />}
              onClick={onDeleteClick}
            >
              Удалить
            </Button>
          </Space>
        </Col>
      </Row>
      <Table
        size="large"
        columns={columns}
        dataSource={queue.data}
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
      />
    </>
  );
};

export default Queue;
