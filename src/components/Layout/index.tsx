import React from 'react';

import Container, { Nav } from './styles';

import Header from './Header';
import NavOrder from './NavOrder';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Nav>
      <Header />
      <NavOrder />
    </Nav>
    <main>{children}</main>
  </Container>
);
export default Layout;
