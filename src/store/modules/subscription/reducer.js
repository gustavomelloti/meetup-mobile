const initialState = {
  subscriptions: [],
  loading: false,
};

export default function subscription(state = initialState, action) {
  switch (action.type) {
    case '@subscription/LOAD_SUBSCRIPTION_SUCCESS':
      return { ...state, subscriptions: action.payload, loading: false };
    case '@subscription/LOAD_SUBSCRIPTION_REQUEST':
    case '@subscription/DO_SUBSCRIPTION_REQUEST':
      return { ...state, loading: true };
    case '@subscription/LOAD_SUBSCRIPTION_FAILURE':
    case '@subscription/DO_SUBSCRIPTION_SUCCESS':
    case '@subscription/DO_SUBSCRIPTION_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
}
