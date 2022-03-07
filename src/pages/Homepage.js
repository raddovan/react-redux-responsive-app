import React from "react";
import "../App.css";
import AppBar from "../components/AppBar";
import Content from "../components/Content";
import Snackbar from "../components/Snackbar";

const Homepage = () => {
  return (
    <div>
      <AppBar />
      <Content />
      <Snackbar />
    </div>
  );
};

export default Homepage;
