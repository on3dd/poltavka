import React, { useMemo } from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

import { PATH_NAMES } from '../../utils/constants';

type BreadcrumbsProps = {
  pathname: string;
};

type BreadcrumbsItem = {
  name: string;
  path: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  pathname,
}: BreadcrumbsProps) => {
  const breadcrumbs = useMemo(() => {
    return pathname.split('/').reduce((acc, curr, idx) => {
      const item =
        idx === 0
          ? { path: '' }
          : {
              name: PATH_NAMES[curr],
              path: acc[idx - 1].path + '/' + curr,
            };

      return [...acc, item];
    }, []);
  }, [pathname]);

  const renderBreadcrumb = ({
    name,
    path,
  }: BreadcrumbsItem) => {
    return (
      <Breadcrumb.Item key={name}>
        <Link href={path}>
          <a>{name}</a>
        </Link>
      </Breadcrumb.Item>
    );
  };

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbs.slice(1).map((el) => {
        return renderBreadcrumb(el);
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
