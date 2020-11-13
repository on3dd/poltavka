import React from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
} from 'antd';
import {
  FileProtectOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

type FormTemplateProps = {
  initialValues: {
    [key: string]: any;
  };
  onValuesChange: (value: any) => void;
  onFinish: (value: any) => void;
  onFinishFailed: (value: any) => void;
};

const FormTemplate: React.FC<FormTemplateProps> = ({
  initialValues,
  onValuesChange,
  onFinish,
  onFinishFailed,
}: FormTemplateProps) => {
  return (
    <Form
      name="new"
      size="large"
      layout="vertical"
      initialValues={initialValues}
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // validateMessages={validateMessages}
    >
      <Form.Item label="ФИО">
        <Input />
      </Form.Item>

      <Form.Item label="Гражданство">
        <Select>
          <Select.Option value="russia">
            Российская Федерация
          </Select.Option>
          <Select.Option value="china">
            Китайская Народная Республика
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Номер телефона">
        <Input />
      </Form.Item>

      <Form.Item label="Пароль">
        <Row justify="space-between">
          <Col flex="auto">
            <Input.Password />
          </Col>
          <Col flex="none" style={{ marginLeft: '1rem' }}>
            <Button
              type="default"
              icon={<FileProtectOutlined />}
            >
              Сгенерировать
            </Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<UserAddOutlined />}
        >
          Добавить пользователя
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTemplate;
