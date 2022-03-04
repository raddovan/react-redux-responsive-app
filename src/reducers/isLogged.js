const loggedReducer = (state = false, actions) => {
  switch (actions.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
