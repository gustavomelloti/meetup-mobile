const initialState = {
  profile: null,
  loading: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return { ...state, profile: action.payload.user };
    case '@user/UPDATE_PROFILE_REQUEST':
      return { ...state, loading: true };
    case '@user/UPDATE_PROFILE_SUCCESS':
      return { ...state, profile: action.payload.profile, loading: false };
    case '@auth/SIGN_OUT':
      return { ...state, profile: null };
    case '@user/UPDATE_PROFILE_FAILURE':
      return { ...state, loading: false };
    default:
      return state;
  }
}
