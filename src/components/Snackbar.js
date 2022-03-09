import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { toggleSnackbarClose } from "../actions";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar() {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toggleSnackbarClose());
  };
  const toggle = useSelector((state) => state.toggle.toggleSnackbar);
  const dispatch = useDispatch();
  const message = useSelector((state) => state.toggle.message);
  const vertical = "top";
  const horizontal = "center";
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={toggle}
        autoHideDuration={2000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
