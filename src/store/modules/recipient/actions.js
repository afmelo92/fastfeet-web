export function registerRecipientRequest(
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/REGISTER_RECIPIENT_REQUEST',
    payload: { name, street, number, complement, city, state, zip },
  };
}

export function registerRecipientSuccess(
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/REGISTER_RECIPIENT_SUCCESS',
    payload: { name, street, number, complement, city, state, zip },
  };
}

export function registerFailure() {
  return {
    type: '@recipient/REGISTER_FAILURE',
  };
}

export function editRecipientRequest(
  id,
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/EDIT_RECIPIENT_REQUEST',
    payload: { id, name, street, number, complement, city, state, zip },
  };
}

export function editRecipientSuccess(
  id,
  name,
  street,
  number,
  complement,
  city,
  state,
  zip
) {
  return {
    type: '@recipient/EDIT_RECIPIENT_SUCCESS',
    payload: { id, name, street, number, complement, city, state, zip },
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
