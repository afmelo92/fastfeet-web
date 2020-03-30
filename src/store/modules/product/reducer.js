import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  product: '',
};

export default function product(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@product/REGISTER_PRODUCT_REQUEST': {
        draft.loading = true;
        draft.product = action.payload.product;
        break;
      }
      case '@product/REGISTER_PRODUCT_SUCCESS': {
        draft.loading = false;
        draft.product = action.payload.product;
        break;
      }
      case '@product/REGISTER_FAILURE': {
        draft.loading = false;
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
