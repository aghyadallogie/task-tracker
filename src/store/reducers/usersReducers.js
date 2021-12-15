const initialState = {
  user: null,
  authenticated: false,
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { user: payload, authenticated: true };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
