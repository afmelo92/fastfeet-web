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