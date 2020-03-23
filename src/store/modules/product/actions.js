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

export function registerFailure() {
  return {
    type: '@product/REGISTER_FAILURE',
  };
}
