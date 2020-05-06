import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../../hooks/order';

import Container from './styles';
import Button from '../../components/Button';

import { ReactComponent as Delivery } from '../../assets/delivery.svg';

const FinishedOrder: React.FC = () => {
  const { setActiveStep, reset } = useOrder();

  useEffect(() => {
    setActiveStep('finished');
    reset();
  }, [reset, setActiveStep]);

  return (
    <Container>
      <div>
        <h2>you finished your order</h2>
        <h3>now just wait for the joy to arrive</h3>
      </div>

      <Delivery />

      <Link className="button" to="/">
        <Button>ok!</Button>
      </Link>
    </Container>
  );
};

export default FinishedOrder;
