const initialState = {
  subscriptions: [],
};

export default function subscription(state = initialState, action) {
  switch (action.type) {
    case '@subscription/LOAD_SUBSCRIPTION_SUCCESS':
      return { ...state, subscriptions: action.payload };
    default:
      return state;
  }
}
