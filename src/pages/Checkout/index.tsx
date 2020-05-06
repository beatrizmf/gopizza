import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOrder } from '../../hooks/order';

import formatValue from '../../utils/formatValue';

import Container, { Item } from './styles';
import Button from '../../components/Button';
import Cancel from '../../components/Cancel';
import { Buttons } from '../../components/Layout/styles';

const Checkout: React.FC = () => {
  const { setActiveStep, size, crust, toppings, prices, total } = useOrder();

  const { push } = useHistory();

  const [totalExtraToppings] = useState(
    toppings.length > 3 ? (toppings.length - 3) * 0.5 : 0,
  );

  useEffect(() => {
    if (!crust || !size) push('/');
    setActiveStep('checkout');
  }, [crust, push, setActiveStep, size]);

  return (
    <Container>
      <h2>check your custom pizza</h2>

      <div className="card">
        {size && (
          <Item>
            <p>{`size ${size}`}</p>
            <p>{formatValue(prices.size[size])}</p>
          </Item>
        )}

        <hr />

        {crust && (
          <Item>
            <p>{`crust ${crust}`}</p>
            <p>{formatValue(prices.crust[crust])}</p>
          </Item>
        )}

        <hr />

        {toppings.length > 0 && (
          <Item>
            <div className="toppings">
              {toppings.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>

            {totalExtraToppings > 0 && (
              <div>
                <p>{formatValue(totalExtraToppings)}</p>
              </div>
            )}
          </Item>
        )}

        {toppings.length > 0 && (
          <>
            <hr />
          </>
        )}

        {total && (
          <Item>
            <p>total</p>
            <p>{formatValue(total)}</p>
          </Item>
        )}
      </div>

      <Buttons>
        <Link className="button" to="/finished-order">
          <Button>all right!</Button>
        </Link>

        <Cancel />
      </Buttons>
    </Container>
  );
};

export default Checkout;
