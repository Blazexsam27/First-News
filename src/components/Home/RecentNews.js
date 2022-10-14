import React from "react";
import "../../styles/Home/RecentNews.css";
import RecentNewsCard from "../Widgets/RecentNewsCard";

export default function RecentNews() {
  return (
    <>
      <p className="recent-news-heading">Recent News</p>
      <div className="recent-news-container">
        <RecentNewsCard />
      </div>
    </>
  );
}
