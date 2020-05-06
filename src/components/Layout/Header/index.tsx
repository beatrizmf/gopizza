import React from 'react';
import Container from './styles';

import { ReactComponent as Pizza } from '../../../assets/pizza.svg';

const Header: React.FC = () => (
  <Container>
    <Pizza />
    <h1>
      go
      <span>pizza</span>
    </h1>
  </Container>
);
export default Header;
