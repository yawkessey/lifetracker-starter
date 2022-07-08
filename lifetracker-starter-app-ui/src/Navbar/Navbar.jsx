import React from "react";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="content">
        <div className="logo">
            <a href="/">
                <img src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt="logo" />
            </a>
        </div>
        <ul className="links">
            <li>
                <a href="/activity">Activity</a>
            </li>
            <li>
                <a href="/exercise">Excercise</a>
            </li>

            <li>
                <a href="/nutrition">Nutrition</a>
            </li>
            <li>
                <a href="/sleep">Sleep</a>
            </li>
           
            <li>
                <a href="/login">Login</a>
            </li>
            <li className="btn secondary">
                <a href="/register">Signup</a>
            </li>
        </ul>
      </div>
    </div>
  );
}
