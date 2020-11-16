import React from 'react';

import LoginLayout from '../../layouts/login';
import LoginComponent from '../../components/login';

const Login: React.FC = () => {
  return (
    <LoginLayout>
      <LoginComponent />
    </LoginLayout>
  );
};

export default Login;
