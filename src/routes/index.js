import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Problems from '~/pages/Problems';
import Dashboard from '~/pages/Dashboard';
import RegisterProduct from '~/pages/Dashboard/Register';
import EditProduct from '~/pages/Dashboard/Edit';
import Recipients from '~/pages/Recipients';
import RegisterRecipient from '~/pages/Recipients/Register';
import Deliveryman from '~/pages/Deliveryman';
import RegisterDeliveryman from '~/pages/Deliveryman/Register';
import Default from '~/pages/Default';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route
        path="/product/register"
        exact
        component={RegisterProduct}
        isPrivate
      />
      <Route path="/product/edit/:id" exact component={EditProduct} isPrivate />
      <Route path="/delivery/problems" exact component={Problems} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route
        path="/recipients/register"
        exact
        component={RegisterRecipient}
        isPrivate
      />
      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />
      <Route
        path="/deliveryman/register"
        exact
        component={RegisterDeliveryman}
        isPrivate
      />

      <Route path="/" component={Default} />
    </Switch>
  );
}
