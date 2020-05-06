import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useOrder } from '../../hooks/order';

import formatValue from '../../utils/formatValue';

import Container, { Options } from './styles';
import Button from '../../components/Button';

import Cancel from '../../components/Cancel';
import { Buttons } from '../../components/Layout/styles';
import ToppingItem from './ToppingItem';

const ChooseToppings: React.FC = () => {
  const {
    size,
    crust,
    setActiveStep,
    setToppings,
    avaliableToppings,
    maximumToppingsBySize,
    total,
  } = useOrder();

  const { push } = useHistory();

  useEffect(() => {
    if (!crust) push('/choose-crust');
    setActiveStep('toppings');
    setToppings([]);
  }, [crust, push, setActiveStep, setToppings]);

  return (
    <Container>
      <div>
        <h2>choose your toppings</h2>
        <p>
          you can choose up to three free toppings, above that you pay $0,50 for
          each extra
        </p>
        <p>{`maximum toppings for the ${size} size is ${maximumToppingsBySize}`}</p>
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
