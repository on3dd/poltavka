import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import {
  IdcardOutlined,
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

  const renderTitle = useMemo(() => {
    return (
      <Logo
        className="logo"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px 0 24px',
        }}
      >
        <Typography.Title
          level={3}
          style={{
            margin: 'auto 0',
            color: '#000',
          }}
        >
          Полтавка
        </Typography.Title>
      </Logo>
    );
  }, []);

  const renderIcon = useMemo(() => {
    return (
      <Logo
        className="logo"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IdcardOutlined
          style={{
            fontSize: '32px',
            // lineHeight: '1.35',
          }}
        />
      </Logo>
    );
  }, []);

  const renderLogo = useMemo(() => {
    return collapsed ? renderIcon : renderTitle;
  }, [collapsed]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        {renderLogo}
        <Menu
          theme="light"
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
          style={{ padding: 0, backgroundColor: '#fff' }}
        />
        <Layout.Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
            {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
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
