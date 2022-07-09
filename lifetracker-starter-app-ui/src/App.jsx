import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
