import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import ChooseSize from '../pages/ChooseSize';
import ChooseCrust from '../pages/ChooseCrust';
import ChooseToppings from '../pages/ChooseToppings';
import Checkout from '../pages/Checkout';
import FinishedOrder from '../pages/FinishedOrder';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/choose-size" component={ChooseSize} />
    <Route path="/choose-crust" component={ChooseCrust} />
    <Route path="/choose-toppings" component={ChooseToppings} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/finished-order" component={FinishedOrder} />
    <Route path="/*" component={Home} />
  </Switch>
);

export default Routes;
