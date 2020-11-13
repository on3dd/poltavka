import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Space, Button, Table } from 'antd';
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { rowSelection, columns, data } from '../table';

const Dispatchers: React.FC = () => {
  const router = useRouter();

  const onAddClick = () => {
    router.push('/admin/users/dispatchers/edit/new');
  };

  const onEditClick = () => {
    console.log('edit');
  };

  const onDeleteClick = () => {
    console.log('delete');
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
            Добавить
          </Button>
        </Col>
        <Col>
          <Space>
            <Button
              type="default"
              icon={<EditOutlined />}
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
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default Dispatchers;
