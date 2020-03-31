import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  registerRecipientSuccess,
  registerFailure,
  deleteItemSuccess,
} from './actions';

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

export function* editRecipient({ payload }) {
  try {
    const { id, name, street, number, complement, city, state, zip } = payload;
    yield call(api.put, `recipients/${id}`, {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    });

    registerRecipientSuccess();

    toast.success('Destinatário editado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na edição, verifique os dados!');
    yield put(registerFailure());
  }
}

export function* deleteItem({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `recipients/${id}`);

    deleteItemSuccess();

    toast.success('Destinatário excluído com sucesso!');
    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao excluir, tente novamente mais tarde!');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@recipient/REGISTER_RECIPIENT_REQUEST', registerRecipient),
  takeLatest('@recipient/EDIT_RECIPIENT_REQUEST', editRecipient),
  takeLatest('@product/DELETE_ITEM_REQUEST', deleteItem),
]);
