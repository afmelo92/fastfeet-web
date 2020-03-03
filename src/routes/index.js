import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Product from '~/pages/Product';
import Dashboard from '~/pages/Dashboard';
import Delivery from '~/pages/Delivery';
import Deliveryman from '~/pages/Deliveryman';
import Default from '~/pages/Default';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/product" exact component={Product} isPrivate />
      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />

      <Route path="/" component={Default} />
    </Switch>
  );
}
