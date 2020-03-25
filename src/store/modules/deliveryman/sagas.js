import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { registerDeliverymanSuccess, registerFailure } from './actions';

export function* registerDeliveryman({ payload }) {
  try {
    const { name, email, avatar_id } = payload;
    yield call(api.post, 'deliverers', {
      name,
      email,
      avatar_id,
    });

    registerDeliverymanSuccess();

    toast.success('Entregador cadastrado com sucesso!');
    history.push('/deliveryman');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados!');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@deliveryman/REGISTER_DELIVERYMAN_REQUEST', registerDeliveryman),
]);
