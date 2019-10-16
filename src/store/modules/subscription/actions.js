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

export function cancelSubscription(id) {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION_SUCCESS',
    payload: { id },
  };
}
