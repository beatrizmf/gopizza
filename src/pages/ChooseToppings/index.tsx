import React, { useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useOrder } from '../../hooks/order';

import formatValue from '../../utils/formatValue';

import Container, { Options } from './styles';
import Button from '../../components/Button';

import Cancel from '../../components/Cancel';
import { Buttons } from '../../components/Layout/styles';
import ToppingItem from './ToppingItem';

const ChooseToppings: React.FC = () => {
  const { crust, setActiveStep, avaliableToppings, total } = useOrder();

  const { push } = useHistory();

  useEffect(() => {
    if (!crust) push('/choose-crust');
    setActiveStep('toppings');
  }, [crust, push, setActiveStep]);

  return (
    <Container>
      <div>
        <h2>choose your toppings</h2>
        <p>
          you can choose up to three free toppings, above that you pay $0,50 for
          each extra
        </p>
      </div>

      <Options>
        {avaliableToppings.map(topping => (
          <ToppingItem key={topping} topping={topping} />
        ))}
      </Options>

      <Buttons>
        <Link className="button" to="/checkout">
          <Button>
            <span>finished!</span>
            <span>{formatValue(total)}</span>
          </Button>
        </Link>
        <Cancel />
      </Buttons>
    </Container>
  );
};

export default ChooseToppings;
