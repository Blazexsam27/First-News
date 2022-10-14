import React from "react";
import "../../styles/Widgets/RecentNewsCard.css";

export default function RecentNewsCard() {
  return (
    <>
      <div className="recent-news-card-container">
        <div className="card-image"></div>
        <div className="card-text">
          <p className="card-title">Today's news is as follows</p>
          <p className="card-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            veniam nihil nesciunt!
          </p>
        </div>
      </div>
    </>
  );
}
