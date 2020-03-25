import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import product from './product/sagas';
import deliveryman from './deliveryman/sagas';
import recipient from './recipient/sagas';

export default function* rootSaga() {
  return yield all([auth, user, product, deliveryman, recipient]);
}
