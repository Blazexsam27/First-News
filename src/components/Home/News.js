import React from "react";
import "../../styles/Home/News.css";
import NewsCard from "../Widgets/NewsCard";
import { Link } from "react-router-dom";

export default function News(props) {
  const { news } = props;
  return (
    <>
      <p className="news-heading"> News Heading</p>
      <div className="news-container">
        {news.map((item) => {
          return (
            <Link to={"/fullpost"} state={{ from: item }}>
              <NewsCard
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
