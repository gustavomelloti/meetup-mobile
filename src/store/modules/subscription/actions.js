export function loadSubscriptionsRequest() {
  return {
    type: '@subscription/LOAD_SUBSCRIPTION_REQUEST',
  };
}

export function loadSubscriptionsSuccess(data) {
  return {
    type: '@subscription/LOAD_SUBSCRIPTION_SUCCESS',
    payload: data,
  };
}

export function loadSubscriptionsFailure() {
  return {
    type: '@subscription/LOAD_SUBSCRIPTION_FAILURE',
  };
}

export function cancelSubscription(id) {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION',
    payload: { id },
  };
}

export function doSubscription(id) {
  return {
    type: '@subscription/DO_SUBSCRIPTION',
    payload: { id },
  };
}
