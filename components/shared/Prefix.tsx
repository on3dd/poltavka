import React from 'react';
import { Form, Select } from 'antd';

const PrefixSelector: React.FC = () => (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Select.Option value="7">+7</Select.Option>
    </Select>
  </Form.Item>
);

export default PrefixSelector;
