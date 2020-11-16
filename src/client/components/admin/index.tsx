import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Typography, Button } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const Admin: React.FC = () => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push('/admin/queue');
  }, [router]);

  return (
    <div className="home">
      <Typography.Title>
        Добро пожаловать в панель администратора!
      </Typography.Title>
      <Typography.Paragraph style={{ fontSize: '1rem' }}>
        Для начала работы выберите интересующую вас вкладку
        в меню слева, либо нажмите на кнопку ниже, чтобы
        автоматически перейти во вкладку "Очередь".
      </Typography.Paragraph>
      <Button
        type="primary"
        size="large"
        icon={<TeamOutlined />}
        onClick={onClick}
      >
        Перейти в очередь
      </Button>
    </div>
  );
};

export default Admin;
