import React from "react";
//import "../App.css";
import AppBar from "../../components/AppBar";
import Snackbar from "../../components/Snackbar";
import Home from "./Home";

const Homepage = () => {
  return (
    <div>
      <AppBar />
      <Home />
      <Snackbar />
    </div>
  );
};

export default Homepage;
