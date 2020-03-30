import produce from 'immer';

const INITIAL_STATE = {
  visible: false,
};

export default function options(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@options/SET_VISIBLE': {
        draft.visible = !action.payload.visible;
        break;
      }
      default:
    }
  });
}
