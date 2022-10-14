import React from "react";
import "../../styles/Home/News.css";
import NewsCard from "../Widgets/NewsCard";

export default function News() {
  return (
    <>
      <p className="news-heading"> News Heading</p>
      <div className="news-container">
        <NewsCard />
      </div>
    </>
  );
}
