import React from 'react';
import { Topping } from '../../hooks/order';

import { ReactComponent as Pepperoni } from '../../assets/toppings/pepperoni.svg';
import { ReactComponent as Mushrooms } from '../../assets/toppings/mushrooms.svg';
import { ReactComponent as Onions } from '../../assets/toppings/onions.svg';
import { ReactComponent as Sausage } from '../../assets/toppings/sausage.svg';
import { ReactComponent as Bacon } from '../../assets/toppings/bacon.svg';
import { ReactComponent as ExtraCheese } from '../../assets/toppings/cheese.svg';
import { ReactComponent as BlackOlives } from '../../assets/toppings/black-olives.svg';
import { ReactComponent as GreenPeppers } from '../../assets/toppings/green-peppers.svg';
import { ReactComponent as Pineapple } from '../../assets/toppings/pineapple.svg';
import { ReactComponent as Spinach } from '../../assets/toppings/spinach.svg';

const ToppingIcon: React.FC<{ topping: Topping }> = ({ topping }) => {
  const icons = {
    pepperoni: <Pepperoni />,
    mushrooms: <Mushrooms />,
    onions: <Onions />,
    sausage: <Sausage />,
    bacon: <Bacon />,
    extraCheese: <ExtraCheese />,
    blackOlives: <BlackOlives />,
    greenPeppers: <GreenPeppers />,
    pineapple: <Pineapple />,
    spinach: <Spinach />,
  };

  return icons[topping];
};

export default ToppingIcon;
