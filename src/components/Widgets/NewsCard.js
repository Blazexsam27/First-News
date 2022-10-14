import React from "react";
import "../../styles/Widgets/NewsCard.css";

export default function NewsCard() {
  return (
    <>
      <div className="news-card-container">
        <div className="card-image"></div>
        <div className="card-text">
          <p className="card-title">Today's News</p>
          <p className="card-date">date date</p>
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            deserunt sint cupiditate nemo quam incidunt doloremque?
          </p>
        </div>
      </div>
    </>
  );
}
