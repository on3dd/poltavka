import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Space, Button, Table } from 'antd';

const Edit: React.FC = () => {
  const router = useRouter();
  return (
    <div className="nigger">
      i hate niggers with id "{router.query.id}"
    </div>
  );
};

export default Edit;
