import React from "react";
import "../../styles/Widgets/NewsCard.css";

export default function NewsCard(props) {
  const { title, description, image, publishedAt } = props;
  return (
    <>
      <div className="news-card-container">
        <div
          className="card-image"
          style={{ background: `url('${image}')`, backgroundSize: "cover" }}
        ></div>
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-date">{publishedAt}</p>
          <p className="card-desc">{description}</p>
        </div>
      </div>
    </>
  );
}
