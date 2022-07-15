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
import {useState} from "react";
import LoginForm from "./LoginForm/LoginForm"

 export default function App() {
  const [appState, setAppState] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={appState.user}/>
        <Routes>
          <Route path="/" element={<Landing setAppState={setAppState}/>} />
          <Route path="/login" element={<Login setAppState={setAppState}/>} />
          <Route path="/register" element={<Register setAppState={setAppState}/>} />
          <Route path="/activity" element={<Activity setAppState={setAppState}/>} />
          <Route path="/exercise" element={<Exercise setAppState={setAppState}/>} />
          <Route path="/nutrition" element={<Nutrition setAppState={setAppState}/>} />
          <Route path="/nutrition/create" element={<LoginForm setAppState={setAppState}/>}/>
          <Route path="/sleep" element={<Sleep setAppState={setAppState}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

