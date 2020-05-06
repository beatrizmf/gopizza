import React, { useCallback, useState, useEffect } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { Option, ControlButton } from './styles';
import ToppingIcon from './ToppingIcon';
import { Topping, useOrder } from '../../hooks/order';

const ToppingItem: React.FC<{ topping: Topping }> = ({ topping }) => {
  const { toppings, setToppings, setTotal } = useOrder();
  const [isToppingSelected, setIsToppingSelected] = useState(false);

  useEffect(() => {
    setIsToppingSelected(toppings.findIndex(item => item === topping) > 0);
  }, [topping, toppings]);

  const handleAdd = useCallback(
    (toppingToAdd: Topping): void => {
      setToppings(prevToppings => [...prevToppings, toppingToAdd]);

      if (toppings.length > 3) {
        setTotal(prevTotal => prevTotal + 0.5);
      }
    },
    [setToppings, setTotal, toppings],
  );

  const handleRemove = useCallback(
    (toppingToRemove: Topping): void => {
      if (toppings.length > 3) {
        setTotal(prevTotal => prevTotal - 0.5);
      }

      setToppings(prevToppings =>
        prevToppings.filter(item => item !== toppingToRemove),
      );

      if (toppings.length > 3) {
        setTotal(prevTotal => prevTotal + 0.5);
      }
    },
    [setToppings, setTotal, toppings],
  );

  return (
    <>
      <Option>
        <span>
          <ToppingIcon topping={topping} />
          {topping}
        </span>

        <div>
          <ControlButton
            onClick={() => handleRemove(topping)}
            disabled={!isToppingSelected}
          >
            <FiMinus />
          </ControlButton>

          <span>{isToppingSelected ? '1' : '0'}</span>

          <ControlButton
            onClick={() => handleAdd(topping)}
            disabled={isToppingSelected}
          >
            <FiPlus />
          </ControlButton>
        </div>
      </Option>
      <hr />
    </>
  );
};

export default ToppingItem;
