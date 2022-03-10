import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
