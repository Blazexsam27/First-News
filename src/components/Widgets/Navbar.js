import React from "react";
import "../../styles/Widgets/Navbar.css";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
      <div className="social-media-items">
        <ul>
          <li>
            <i class="zmdi zmdi-instagram"></i>
          </li>
          <li>
            <i class="zmdi zmdi-twitter-box"></i>
          </li>
          <li>
            <i class="zmdi zmdi-facebook"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
