import React from "react";
import "./Login.css";
import {useState} from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log("email: " + email);
  }

  const handleOnPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log("password: " + password);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let credentials = {
      email: email,
      password: password
    };
    console.log("submit");
    console.log(credentials);
  }

  return (

    <div className="Login">
      <div className="card">
        <h2>Login</h2>
        <br></br>
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="user@gmail.com" onChange={handleOnEmailChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" onChange={handleOnPasswordChange}/>
          </div>
          <button className="btn" onClick={handleOnSubmit}>Login</button>
        </div>
        <div className="footer">
          <p>
            Don't have an account? Sign up <a href="/register">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
