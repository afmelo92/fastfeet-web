import { takeLatest, all } from 'redux-saga/effects';

import { setVisible } from './actions';

export function toggleVisible() {
  try {
    setVisible();
  } catch (err) {
    console.tron.log(`ERRO NO TOGGLE`);
  }
}

export default all([takeLatest('@options/SET_VISIBLE_REQUEST', toggleVisible)]);
