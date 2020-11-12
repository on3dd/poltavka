import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  ReadOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

import LayoutProps from '../../types/props/layout';

const Logo = styled.div`
  height: 60px; // 64px - heading width; 4px - menu's first child margin
`;

const Admin: React.FC<LayoutProps> = ({
  children,
}: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (value: boolean) => {
    console.log('onCollapse value:', value);
    setCollapsed(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Logo
          className="logo"
          style={{
            display: 'flex',
            padding: '0 16px 0 24px',
          }}
        >
          <Typography.Title
            level={3}
            style={{
              margin: 'auto 0',
              color: '#fff',
            }}
          >
            Полтавка
          </Typography.Title>
        </Logo>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Главная
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            Очередь
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            icon={<UserOutlined />}
            title="Пользователи"
          >
            <Menu.Item key="3">Обычные</Menu.Item>
            <Menu.Item key="4">Диспетчеры</Menu.Item>
            <Menu.Item key="5">Администраторы</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="6" icon={<ReadOutlined />}>
            Новости
          </Menu.Item>
          <Menu.Item key="7" icon={<LineChartOutlined />}>
            Статистика
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Header
          className="site-layout-background"
          style={{ padding: 0 }}
        />
        <Layout.Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
