import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Users: React.FC = () => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push('/admin/users/ordinary');
  }, [router]);

  return (
    <div className="users">
      <Typography.Title>Пользователи</Typography.Title>
      <Typography.Paragraph style={{ fontSize: '1rem' }}>
        Для продолжения выберите интересующую вас категорию
        пользователей в меню слева, либо нажмите на кнопку
        ниже, чтобы автоматически перейти во категорию
        "Обычные".
      </Typography.Paragraph>
      <Button
        type="primary"
        size="large"
        icon={<UserOutlined />}
        onClick={onClick}
      >
        Перейти к обычным пользователям
      </Button>
    </div>
  );
};

export default Users;
