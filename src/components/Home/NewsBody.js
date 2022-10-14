import React from "react";
import RecentNews from "./RecentNews.js";
import News from "./News.js";
import "../../styles/Home/NewsBody.css";

export default function NewsBody() {
  return (
    <div className="news-body-container">
      <RecentNews />
      <News />
    </div>
  );
}
