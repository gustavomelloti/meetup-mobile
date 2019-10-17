const initialState = {
  subscriptions: [],
  loading: false,
};

export default function subscription(state = initialState, action) {
  switch (action.type) {
    case '@subscription/LOAD_SUBSCRIPTION_SUCCESS':
      return { ...state, subscriptions: action.payload, loading: false };
    case '@subscription/LOAD_SUBSCRIPTION_REQUEST':
      return { ...state, loading: true };
    case '@subscription/LOAD_SUBSCRIPTION_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
}
