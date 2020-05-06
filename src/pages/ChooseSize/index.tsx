import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Size, useOrder } from '../../hooks/order';

import formatValue from '../../utils/formatValue';

import Container, { Options, Option } from './styles';
import Button from '../../components/Button';

import { ReactComponent as Large } from '../../assets/sizes/large.svg';
import { ReactComponent as Medium } from '../../assets/sizes/medium.svg';
import { ReactComponent as Small } from '../../assets/sizes/small.svg';
import Cancel from '../../components/Cancel';
import { Buttons } from '../../components/Layout/styles';

const ChooseSize: React.FC = () => {
  const { setActiveStep, size, setSize, setTotal, total, prices } = useOrder();

  useEffect(() => {
    setActiveStep('size');
  }, [setActiveStep]);

  const handleSelect = useCallback(
    (selectedSize: Size): void => {
      if (total > 0) setTotal(0);

      setSize(selectedSize);
      setTotal(prevTotal => prevTotal + prices.size[selectedSize]);
    },
    [prices.size, setSize, setTotal, total],
  );

  return (
    <Container>
      <h2>choose your size</h2>

      <Options>
        <Option
          selected={size === 'large'}
          onClick={() => handleSelect('large')}
        >
          <Large />
          <p>{`large - ${formatValue(prices.size.large)}`}</p>
        </Option>

        <Option
          selected={size === 'medium'}
          onClick={() => handleSelect('medium')}
        >
          <Medium />
          <p>{`medium - ${formatValue(prices.size.medium)}`}</p>
        </Option>

        <Option
          selected={size === 'small'}
          onClick={() => handleSelect('small')}
        >
          <Small />
          <p>{`small - ${formatValue(prices.size.small)}`}</p>
        </Option>
      </Options>

      <Buttons>
        <Link className="button" to="/choose-crust">
          <Button disabled={!size}>
            <span>next</span>
            {size && <span>{formatValue(total)}</span>}
          </Button>
        </Link>
        <Cancel />
      </Buttons>
    </Container>
  );
};

export default ChooseSize;
