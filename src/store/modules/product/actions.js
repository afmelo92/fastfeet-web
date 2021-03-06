export function registerProductRequest(recipient, deliveryman, product) {
  return {
    type: '@product/REGISTER_PRODUCT_REQUEST',
    payload: { recipient, deliveryman, product },
  };
}

export function registerProductSuccess(recipient, deliveryman, product) {
  return {
    type: '@product/REGISTER_PRODUCT_SUCCESS',
    payload: { recipient, deliveryman, product },
  };
}

export function editProductRequest(id, recipient, deliveryman, product) {
  return {
    type: '@product/EDIT_PRODUCT_REQUEST',
    payload: { id, recipient, deliveryman, product },
  };
}

export function editProductSuccess(id, recipient, deliveryman, product) {
  return {
    type: '@product/EDIT_PRODUCT_SUCCESS',
    payload: { id, recipient, deliveryman, product },
  };
}

export function registerFailure() {
  return {
    type: '@product/REGISTER_FAILURE',
  };
}

export function deleteItemRequest(id) {
  return {
    type: '@product/DELETE_ITEM_REQUEST',
    payload: { id },
  };
}

export function deleteItemSuccess(id) {
  return {
    type: '@product/DELETE_ITEM_SUCCESS',
    payload: { id },
  };
}
