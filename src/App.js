import React from "react";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import List from "./pages/list/List";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
