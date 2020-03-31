import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  product: '',
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/REGISTER_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/REGISTER_DELIVERYMAN_SUCCESS': {
        draft.loading = false;
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/REGISTER_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliveryman/EDIT_DELIVERYMAN_REQUEST': {
        draft.loading = true;
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/EDIT_DELIVERYMAN_SUCCESS': {
        draft.loading = false;
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/DELETE_ITEM_REQUEST': {
        draft.loading = true;
        draft.product = action.payload.product;
        break;
      }
      case '@deliveryman/DELETE_ITEM_SUCCESS': {
        draft.loading = false;
        draft.product = action.payload.product;
        break;
      }
      default:
    }
  });
}
