import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { registerProductSuccess, registerFailure } from './actions';

export function* registerProduct({ payload }) {
  try {
    const { recipient, deliveryman, product } = payload;
    yield call(api.post, 'products', {
      deliverer_id: deliveryman.id,
      recipient_id: recipient.id,
      product,
    });

    registerProductSuccess();

    toast.success('Produto cadastrado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados!');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@product/REGISTER_PRODUCT_REQUEST', registerProduct),
]);
