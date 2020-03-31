export function registerDeliverymanRequest(name, email, avatar_id) {
  return {
    type: '@deliveryman/REGISTER_DELIVERYMAN_REQUEST',
    payload: { name, email, avatar_id },
  };
}

export function registerDeliverymanSuccess(name, email, avatar_id) {
  return {
    type: '@deliveryman/REGISTER_DELIVERYMAN_SUCCESS',
    payload: { name, email, avatar_id },
  };
}

export function registerFailure() {
  return {
    type: '@deliveryman/REGISTER_FAILURE',
  };
}

export function editDeliverymanRequest(name, email, avatar_id, id) {
  return {
    type: '@deliveryman/EDIT_DELIVERYMAN_REQUEST',
    payload: { name, email, avatar_id, id },
  };
}

export function editDeliverymanSuccess(name, email, avatar_id, id) {
  return {
    type: '@deliveryman/EDIT_DELIVERYMAN_SUCCESS',
    payload: { name, email, avatar_id, id },
  };
}

export function deleteItemRequest(id) {
  return {
    type: '@deliveryman/DELETE_ITEM_REQUEST',
    payload: { id },
  };
}

export function deleteItemSuccess(id) {
  return {
    type: '@deliveryman/DELETE_ITEM_SUCCESS',
    payload: { id },
  };
}
