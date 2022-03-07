import React from "react";
import "./index.css";
import logo from "../../assets/logo3.png";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";

const Signin = () => {
  let navigate = useNavigate();
  const goto = () => {
    navigate("/");
  };
  return (
    <div className="section">
      <img src={logo} alt="logo" height={100} className="logo" />
      <div className="signin">Sign in</div>
      <div className="email">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Username"
            variant="standard"
            style={{ width: 300 }}
            inputProps={{ style: { color: "white" } }}
            color="success"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </Box>
      </div>
      <div className="password">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Lock sx={{ color: "white", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Password"
            variant="standard"
            style={{ width: 300 }}
            inputProps={{ style: { color: "white" } }}
            color="success"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </Box>
      </div>
      <Button
        variant="outlined"
        color="success"
        className="signin_button"
        onClick={goto}
      >
        Sign in
      </Button>
    </div>
  );
};

export default Signin;
