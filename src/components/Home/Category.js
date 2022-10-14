// component to show trending news in grid format

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home/Category.css";

export default function Category(props) {
  const { changeCategory } = props;

  return (
    <>
      <div className="trending-container">
        <div className="business" onClick={changeCategory}>
          <p className="trending-news-title">Business</p>
        </div>
        <div className="general" onClick={changeCategory}>
          <p className="trending-news-title">General</p>
        </div>
        <div className="health" onClick={changeCategory}>
          <p className="trending-news-title">Health</p>
        </div>

        <div className="sports" onClick={changeCategory}>
          <p className="trending-news-title">Sports</p>
        </div>
        <div className="science" onClick={changeCategory}>
          <p className="trending-news-title">Science</p>
        </div>
      </div>
    </>
  );
}
