import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from '../../hooks/order';

import Container from './styles';
import Button from '../../components/Button';

import { ReactComponent as Welcome } from '../../assets/welcome.svg';

const Home: React.FC = () => {
  const { setActiveStep } = useOrder();

  useEffect(() => {
    setActiveStep('home');
  }, [setActiveStep]);

  return (
    <Container>
      <h2>home is where the pizza is</h2>

      <Welcome />

      <Link className="button" to="/choose-size">
        <Button>customize my pizza now!</Button>
      </Link>
    </Container>
  );
};

export default Home;
