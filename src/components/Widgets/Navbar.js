import React from "react";
import "../../styles/Widgets/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>Contact</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </div>
      <div className="social-media-items">
        <ul>
          <li>
            <i className="zmdi zmdi-instagram"></i>
          </li>
          <li>
            <i className="zmdi zmdi-twitter-box"></i>
          </li>
          <li>
            <i className="zmdi zmdi-facebook"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
