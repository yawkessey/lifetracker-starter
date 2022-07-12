import "./App.css";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Activity from "./Activity/Activity"
import Exercise from "./Exercise/Exercise";
import Nutrition from "./Nutrition/Nutrition";
import Sleep from ".//Sleep/Sleep";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/sleep" element={<Sleep />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
