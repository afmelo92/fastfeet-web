import { takeLatest, all } from 'redux-saga/effects';

import { setModal } from './actions';

export function toggleModal() {
  try {
    setModal();
  } catch (err) {
    console.tron.log(`ERRO NO TOGGLE`);
  }
}

export default all([takeLatest('@modal/SET_MODAL', toggleModal)]);
