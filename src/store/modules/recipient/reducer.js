import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  recipient: '',
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipient/REGISTER_RECIPIENT_REQUEST': {
        draft.loading = true;
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/REGISTER_RECIPIENT_SUCCESS': {
        draft.loading = false;
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/REGISTER_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@recipient/EDIT_RECIPIENT_REQUEST': {
        draft.loading = true;
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@recipient/EDIT_RECIPIENT_SUCCESS': {
        draft.loading = false;
        draft.recipient = action.payload.recipient;
        break;
      }
      case '@product/DELETE_ITEM_REQUEST': {
        draft.loading = true;
        draft.product = action.payload.product;
        break;
      }
      case '@product/DELETE_ITEM_SUCCESS': {
        draft.loading = false;
        draft.product = action.payload.product;
        break;
      }
      default:
    }
  });
}
