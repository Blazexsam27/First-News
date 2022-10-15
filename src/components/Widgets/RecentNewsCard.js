import React from "react";
import "../../styles/Widgets/RecentNewsCard.css";

export default function RecentNewsCard(props) {
  const { title, description, image } = props;
  return (
    <>
      <div className="recent-news-card-container">
        <div
          className="card-image"
          style={{ background: `url('${image}')`, backgroundSize: "cover" }}
        ></div>
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-desc">{description}</p>
        </div>
      </div>
    </>
  );
}
