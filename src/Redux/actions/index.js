export const signin = () => {
  return {
    type: "SIGN_IN",
  };
};

export const toggleSnackbarOpen = (message) => {
  return {
    type: "TOGGLE_OPEN",
    message,
  };
};

export const toggleSnackbarClose = () => ({
  type: "TOGGLE_CLOSE",
});
