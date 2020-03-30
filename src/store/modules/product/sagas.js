import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  registerProductSuccess,
  editProductSuccess,
  registerFailure,
  deleteItemSuccess,
} from './actions';

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
    history.push('/dashboards');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados!');
    yield put(registerFailure());
  }
}

export function* editProduct({ payload }) {
  try {
    const { id, recipient, deliveryman, product } = payload;
    yield call(api.put, `products/${id}`, {
      deliverer_id: deliveryman.id,
      recipient_id: recipient.id,
      product,
    });

    editProductSuccess();

    toast.success('Produto editado com sucesso!');
    history.push('/dashboards');
  } catch (err) {
    toast.error('Falha na edição, verifique os dados!');
    yield put(registerFailure());
  }
}

export function* deleteItem({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `products/${id}`);

    deleteItemSuccess();

    toast.success('Produto excluído com sucesso!');
    window.location.reload();
  } catch (err) {
    toast.error('Falha ao excluir, tente novamente mais tarde!');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@product/REGISTER_PRODUCT_REQUEST', registerProduct),
  takeLatest('@product/EDIT_PRODUCT_REQUEST', editProduct),
  takeLatest('@product/DELETE_ITEM_REQUEST', deleteItem),
]);
