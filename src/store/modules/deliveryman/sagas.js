import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  registerDeliverymanSuccess,
  editDeliverymanSuccess,
  registerFailure,
  deleteItemSuccess,
} from './actions';

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

export function* editDeliveryman({ payload }) {
  try {
    const { name, email, avatar_id, id } = payload;
    yield call(api.put, `deliverers/${id}`, {
      name,
      email,
      avatar_id,
    });

    editDeliverymanSuccess();

    toast.success('Entregador editado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na edição, verifique os dados!');
    yield put(registerFailure());
  }
}

export function* deleteItem({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `deliverers/${id}`);

    deleteItemSuccess();

    toast.success('Entregador excluído com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao excluir, tente novamente mais tarde!');
    yield put(registerFailure());
  }
}

export default all([
  takeLatest('@deliveryman/REGISTER_DELIVERYMAN_REQUEST', registerDeliveryman),
  takeLatest('@deliveryman/EDIT_DELIVERYMAN_REQUEST', editDeliveryman),
  takeLatest('@deliveryman/DELETE_ITEM_REQUEST', deleteItem),
]);
