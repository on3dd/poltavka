import React from 'react';
import { useSelector } from 'react-redux';
import {  } from 'antd';

import RootState from '../../types/states';

const Admin: React.FC = () => {
  const state = useSelector((state: RootState) => state);

  return <code>{JSON.stringify(state, null, 2)}</code>;
};

export default Admin;
