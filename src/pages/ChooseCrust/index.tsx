import React, { useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Crust, useOrder } from '../../hooks/order';

import formatValue from '../../utils/formatValue';

import Container, { Options, Option } from './styles';
import Button from '../../components/Button';

import { ReactComponent as Thick } from '../../assets/crusts/thick.svg';
import { ReactComponent as Thin } from '../../assets/crusts/thin.svg';
import Cancel from '../../components/Cancel';
import { Buttons } from '../../components/Layout/styles';

const ChooseCrust: React.FC = () => {
  const {
    size,
    setActiveStep,
    crust,
    setCrust,
    setTotal,
    total,
    prices,
  } = useOrder();

  const { push } = useHistory();

  useEffect(() => {
    if (!size) push('/choose-size');

    setActiveStep('crust');
  }, [push, setActiveStep, size]);

  const handleSelect = useCallback(
    (selectedCrust: Crust): void => {
      if (size) setTotal(prices.size[size]);

      setCrust(selectedCrust);
      setTotal(prevTotal => prevTotal + prices.crust[selectedCrust]);
    },
    [prices.crust, prices.size, setCrust, setTotal, size],
  );

  return (
    <Container>
      <h2>choose your crust</h2>

      <Options>
        <Option
          selected={crust === 'thick'}
          onClick={() => handleSelect('thick')}
        >
          <Thick />
          <p>{`thick - ${formatValue(prices.crust.thick)}`}</p>
        </Option>

        <Option
          selected={crust === 'thin'}
          onClick={() => handleSelect('thin')}
        >
          <Thin />
          <p>{`thin - ${formatValue(prices.crust.thin)}`}</p>
        </Option>
      </Options>

      <Buttons>
        <Link className="button" to="/choose-toppings">
          <Button disabled={!crust}>
            <span>next</span>
            <span>{formatValue(total)}</span>
          </Button>
        </Link>
        <Cancel />
      </Buttons>
    </Container>
  );
};

export default ChooseCrust;
