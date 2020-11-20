import React from 'react';
import { Row, Col, Space, Button, Table } from 'antd';
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import { columns } from './config';
import {
  ModalTemplate,
  ModalTemplateProps,
} from '../../../shared/Modal';

interface TableTemplateProps extends ModalTemplateProps {
  id: number | null;
  dataSource: any[];
  rowSelection: any;
  onAddClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const TableTemplate: React.FC<TableTemplateProps> = ({
  id,
  dataSource,
  rowSelection,
  visible,
  confirmLoading,
  onAddClick,
  onEditClick,
  onDeleteClick,
  handleOk,
  handleCancel,
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
        rowKey="name"
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
      />
      <ModalTemplate
        visible={visible}
        confirmLoading={confirmLoading}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default TableTemplate;
