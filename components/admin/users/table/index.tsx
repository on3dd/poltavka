import React from 'react';
import { Row, Col, Space, Button, Table } from 'antd';
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { columns } from './config';

type TableTemplateProps = {
  id: number | null;
  dataSource: any[];
  rowSelection: any;
  onAddClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

const TableTemplate: React.FC<TableTemplateProps> = ({
  id,
  dataSource,
  rowSelection,
  onAddClick,
  onEditClick,
  onDeleteClick,
}: TableTemplateProps) => {
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
              disabled={id === null}
              icon={<EditOutlined />}
              onClick={onEditClick}
            >
              Редактировать
            </Button>
            <Button
              type="primary"
              danger={true}
              disabled={id === null}
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
        dataSource={dataSource}
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
      />
    </>
  );
};

export default TableTemplate;
