import React from "react";
import "../../styles/Widgets/CategoryNavbar.css";

export default function CategoryNavbar() {
  return (
    <>
      <nav className="category-navbar">
        <ul>
          <li>Political</li>
          <li>Geographical</li>
          <li>Sports</li>
          <li>Cultural</li>
          <li>Science</li>
        </ul>
      </nav>
    </>
  );
}
