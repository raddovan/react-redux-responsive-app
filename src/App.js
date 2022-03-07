import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
