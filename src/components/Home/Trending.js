// component to show trending news in grid format

import React from "react";
import "../../styles/Home/Trending.css";

export default function Trending() {
  return (
    <>
      <div className="trending-container">
        <div className="politics">
          <p className="trending-news-title">Jeo Biden</p>
        </div>
        <div className="business">
          <p className="trending-news-title">Business</p>
        </div>

        <div className="sports">
          <p className="trending-news-title">Sports</p>
        </div>
        <div className="science">
          <p className="trending-news-title">Science</p>
        </div>
      </div>
    </>
  );
}
