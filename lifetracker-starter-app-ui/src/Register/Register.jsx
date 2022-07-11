import "./Register.css";
import React from "react";

export default function Register() {
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
              name="email"
              placeholder="Enter a valid email"
            />
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="your_username" />
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div className="input-field">
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
            />
          </div>
          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
            />
          </div>
          <button className="btn">Create Account</button>
        </div>
        <div className="footer">
          Already have an account? Login
          <a href="/login">here</a>
        </div>
      </div>
    </div>
  );
}
