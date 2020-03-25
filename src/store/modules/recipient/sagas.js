import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { registerRecipientSuccess, registerFailure } from './actions';

export function* registerRecipient({ payload }) {
  try {
    const { name, street, number, complement, city, state, zip } = payload;
    yield call(api.post, 'recipients', {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    });

    registerRecipientSuccess();

    toast.success('Destinatário cadastrado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados!');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@recipient/REGISTER_RECIPIENT_REQUEST', registerRecipient),
]);
