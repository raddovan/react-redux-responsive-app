const initialState = {
  toggleSnackbar: false,
  message: null,
};
const toggleReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "TOGGLE_OPEN":
      return {
        ...state,
        toggleSnackbar: true,
        message: actions.message,
      };
    case "TOGGLE_CLOSE":
      return {
        ...state,
        toggleSnackbar: false,
        message: null,
      };
    default:
      return state;
  }
};

export default toggleReducer;
