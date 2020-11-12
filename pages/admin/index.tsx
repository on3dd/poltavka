import React from 'react';
import styled from 'styled-components';

const Div = styled.div``;

const Heading = styled.h1`
  font-size: 5rem;
`;

const Admin: React.FC = () => {
  return (
    <Div className="admin">
      <Heading className="admin__heading">
        Fuck niggers!
      </Heading>
    </Div>
  );
};

export default Admin;
