import produce from 'immer';

const INITIAL_STATE = {
  modal: false,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/SET_MODAL': {
        draft.modal = !action.modal;
        break;
      }
      default:
    }
  });
}
