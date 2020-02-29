import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SigIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Product from '../pages/Product';
import Dashboard from '../pages/Dashboard';
import Delivery from '../pages/Delivery';
import Deliveryman from '../pages/Deliveryman';
import Default from '../pages/Default';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SigIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/product" exact component={Product} />
      <Route path="/delivery" exact component={Delivery} />
      <Route path="/deliveryman" exact component={Deliveryman} />

      <Route path="/" component={Default} />
    </Switch>
  );
}
