import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Row,
  Col,
  Space,
  Button,
  Table,
  Modal,
  Typography,
} from 'antd';
import {
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import deleteQueueItem from '../../../actions/deleteQueueItem';

import RootState from '../../../types/states';
import QueueItem from '../../../types/QueueItem';

import { columns } from './table';

const Queue: React.FC = () => {
  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const queue = useSelector(
    (state: RootState) => state.queue,
  );

  const router = useRouter();

  const confirmLoading = useMemo(() => {
    return queue.isFetching;
  }, [queue.isFetching]);

  const onAddClick = () => {
    router.push('/admin/queue/edit/new');
  };

  const onEditClick = () => {
    router.push(`/admin/queue/edit/${id}`);
  };

  const openModal = useCallback(() => {
    setVisible(() => true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(() => false);
  }, []);

  const onDeleteClick = useCallback(() => {
    openModal();
  }, []);

  const handleOk = useCallback(async () => {
    await dispatch(deleteQueueItem(id));

    closeModal();
  }, []);

  const handleCancel = useCallback(() => {
    closeModal();
  }, []);

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
        dataSource={queue.data}
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
      />
      <Modal
        title="Предупреждение"
        okText="Подтвердить"
        cancelText="Отмена"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Typography.Paragraph>
          Вы уверенны, что хотите удалить данный элемент?
        </Typography.Paragraph>
        <Typography.Paragraph>
          Последствия этого действия необратимы.
        </Typography.Paragraph>
      </Modal>
    </>
  );
};

export default Queue;
