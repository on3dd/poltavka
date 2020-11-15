import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';
import {
  IdcardOutlined,
  TeamOutlined,
  UserOutlined,
  ReadOutlined,
  LineChartOutlined,
} from '@ant-design/icons';

import LayoutProps from '../../types/props/layout';

import Breadcrumbs from './Breadcrumbs';

const Logo = styled.div`
  height: 60px; // 64px - heading width; 4px - menu's first child margin
`;

const Admin: React.FC<LayoutProps> = ({
  children,
}: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const onCollapse = (value: boolean) => {
    console.log('onCollapse value:', value);
    setCollapsed(value);
  };

  const selectedKeys = useMemo(() => {
    return router.pathname === '/admin'
      ? ['/admin']
      : router.pathname
          .split('/')
          .reduce((acc, curr, idx) => {
            const key =
              idx === 0 ? curr : acc[idx - 1] + '/' + curr;

            return [...acc, key];
          }, [])
          .slice(2);
  }, [router.pathname]);

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
        trigger={null}
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        {renderLogo}
        <Menu
          theme="light"
          defaultOpenKeys={['/admin/users']}
          defaultSelectedKeys={['/admin/queue']}
          mode="inline"
          activeKey={router.pathname}
          selectedKeys={selectedKeys}
        >
          <Menu.Item key="/admin" icon={<TeamOutlined />}>
            <Link href="/admin">
              <a>Главная</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="/admin/queue"
            icon={<TeamOutlined />}
          >
            <Link href="/admin/queue">
              <a>Очередь</a>
            </Link>
          </Menu.Item>

          <Menu.SubMenu
            key="/admin/users"
            icon={<UserOutlined />}
            title="Пользователи"
          >
            <Menu.Item key="/admin/users/ordinary">
              <Link href="/admin/users/ordinary">
                <a>Обычные</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="/admin/users/dispatchers">
              <Link href="/admin/users/dispatchers">
                <a>Диспетчеры</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="/admin/users/administrators">
              <Link href="/admin/users/administrators">
                <a>Администраторы</a>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="/admin/news"
            icon={<ReadOutlined />}
            disabled={true}
          >
            <Link href="/admin/news">
              <a>Новости</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            key="/admin/statistics"
            icon={<LineChartOutlined />}
            disabled={true}
          >
            <Link href="/admin/statistics">
              <a>Статистика</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200 }}
      >
        <Layout.Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: '#fff' }}
        />

        <Layout.Content style={{ margin: '0 16px' }}>
          <Breadcrumbs pathname={router.pathname} />

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Layout.Content>

        <Layout.Footer style={{ textAlign: 'center' }}>
          Полтавка © 2020 Создано командой ASAP ДВФУ
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default Admin;
