import React, { useCallback, useState, useEffect } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import { Option, ControlButton } from './styles';
import ToppingIcon from './ToppingIcon';
import { Topping, useOrder } from '../../hooks/order';

const ToppingItem: React.FC<{ topping: Topping }> = ({ topping }) => {
  const { toppings, setToppings, setTotal, prices, crust, size } = useOrder();
  const [isToppingSelected, setIsToppingSelected] = useState(false);

  useEffect(() => {
    setIsToppingSelected(toppings.findIndex(item => item === topping) > -1);

    const extrasToppings = toppings.length - 3;

    if (size && crust) {
      const prevTotal = prices.size[size] + prices.crust[crust];
      const extraValue = extrasToppings > 0 ? extrasToppings * 0.5 : 0;
      setTotal(prevTotal + extraValue);
    }
  }, [crust, prices, setTotal, size, topping, toppings]);

  const handleAdd = useCallback(
    (toppingToAdd: Topping): void => {
      setToppings(prevToppings => [...prevToppings, toppingToAdd]);
    },
    [setToppings],
  );

  const handleRemove = useCallback(
    (toppingToRemove: Topping): void => {
      setToppings(prevToppings =>
        prevToppings.filter(item => item !== toppingToRemove),
      );
    },
    [setToppings],
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
