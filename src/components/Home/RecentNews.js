import React from "react";
import "../../styles/Home/RecentNews.css";
import RecentNewsCard from "../Widgets/RecentNewsCard";
import { Link } from "react-router-dom";

export default function RecentNews(props) {
  const { news } = props;
  return (
    <>
      <p className="recent-news-heading">Recent News</p>
      <div className="recent-news-container">
        {news.map((item) => {
          return (
            <Link to={"/fullpost"} state={{ from: item }}>
              <RecentNewsCard
                title={item.title}
                description={item.description}
                image={item.urlToImage}
                publishedAt={item.publishedAt}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
