import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>
        <br></br>
        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="user@gmail.com" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button className="btn">Login</button>
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
