import "./Register.css";
import React from "react";
import { useState } from "react";
//import axios from "axios";
/*
  To do list: 
    1. Add validation to the form
    2. Post request to backend to create a new user
    3. When a user is auntheticated redirect them to the activity page
    4. When a user is not authenticated redirect them to the login page
*/
export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleOnEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log("email: " + email);
  };
  const handleFirstNameChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
    console.log("firstName: " + firstName);
  };
  const handleLastNameChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
    console.log("lastName: " + lastName);
  };
  const handleUserNameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
    console.log("username: " + username);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log("password: " + password);
  };
  const handlePasswordConfirmChange = (e) => {
    e.preventDefault();
    setPasswordConfirm(e.target.value);
    console.log("passwordConfirm: " + passwordConfirm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      console.log("Passwords do not match");
      //Create a custom error
      //Registration fails
    }
    let userInfo = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      email: email,
    };
    console.log(userInfo);
    console.log("submit");

    document.querySelector(".email").value = "";
    document.querySelector(".username").value = "";
    document.querySelector(".firstName").value = "";
    document.querySelector(".lastName").value = "";
    document.querySelector(".password").value = "";
    document.querySelector(".passwordConfirm").value = "";
  };
  // need to post userInfo to backend
  return (
    <div className="Register">
      <div className="card">
        <h2>Register</h2>
        <br></br>
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              placeholder="Enter a valid email"
              onChange={handleOnEmailChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="username"
              placeholder="your_username"
              onChange={handleUserNameChange}
            />
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <input
                type="text"
                className="firstName"
                placeholder="First Name"
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="lastName"
                placeholder="Last Name"
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              placeholder="Enter a secure password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              className="passwordConfirm"
              placeholder="Confirm your password"
              onChange={handlePasswordConfirmChange}
            />
          </div>
          <button className="btn" onClick={handleSubmit}>
            Create Account
          </button>
        </div>
        <div className="footer">
          Already have an account? Login
          <a href="/login"> here</a>
        </div>
      </div>
    </div>
  );
}
