import React from 'react';
import { useOrder } from '../../../hooks/order';

import { ReactComponent as Ball } from '../../../assets/ball.svg';

import Container, { Balls } from './styles';
import Back from '../../Back';

const NavOrder: React.FC = () => {
  const { activeStep } = useOrder();

  if (
    activeStep !== 'size' &&
    activeStep !== 'crust' &&
    activeStep !== 'toppings'
  ) {
    return <></>;
  }

  return (
    <Container>
      <Back />

      <Balls>
        <Ball className={activeStep === 'size' ? 'active' : ''} />
        <Ball className={activeStep === 'crust' ? 'active' : ''} />
        <Ball className={activeStep === 'toppings' ? 'active' : ''} />
      </Balls>
    </Container>
  );
};

export default NavOrder;
