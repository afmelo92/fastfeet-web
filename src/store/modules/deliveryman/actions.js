export function registerDeliverymanRequest(name, email) {
  return {
    type: '@name/REGISTER_DELIVERYMAN_REQUEST',
    payload: { name, email },
  };
}

export function registerDeliverymanSuccess(name, email) {
  return {
    type: '@name/REGISTER_DELIVERYMAN_REQUEST',
    payload: { name, email },
  };
}

export function registerFailure() {
  return {
    type: '@product/REGISTER_FAILURE',
  };
}
