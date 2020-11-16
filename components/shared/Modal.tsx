import React from 'react';
import { Modal, Typography } from 'antd';

export type ModalTemplateProps = {
  visible: boolean;
  confirmLoading: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export const ModalTemplate: React.FC<ModalTemplateProps> = ({
  visible,
  confirmLoading,
  handleOk,
  handleCancel,
}: ModalTemplateProps) => {
  return (
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
  );
};

export default ModalTemplate;
