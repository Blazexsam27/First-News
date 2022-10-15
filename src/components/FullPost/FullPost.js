import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/FullPost/FullPost.css";
import { Link } from "react-router-dom";
import SuggestionCard from "../Widgets/SuggestionCard";

export default function FullPost() {
  const location = useLocation();
  const news = location.state.from;
  const newsCategory = location.state.category;
  const fullArticleUrl = news.url.slice(7);
  const publishDate = news.publishedAt.split("T")[0];

  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async () => {
    const data = await fetch(
      `http://localhost:8000/api/news/${newsCategory}/2`
    );
    const parsedData = await data.json();
    setSuggestions(parsedData.articles.slice(1, 4));
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <>
      <p className="webpage-heading">
        <span>First</span> News
      </p>
      <div className="article-meta">
        <p className="author-name">By: {news.author}</p>
        <p className="publish-date">Publised On: {publishDate}</p>
      </div>
      <div className="fullpost-container">
        <div
          className="news-image"
          style={{
            background: `url(${news.urlToImage})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="news-text">
          <p className="news-title">{news.title}</p>
          <p className="news-desc">{news.content}</p>
          <p className="news-source">
            Source: {news.source.name ? news.source.name : "Unknown"}
          </p>
          <Link to={`//${fullArticleUrl}`} target="_blank">
            <p className="news-url">Read Complete Article</p>
          </Link>
        </div>
      </div>
      <p className="suggestion-heading">Related Articles</p>
      <div className="suggestion-card-container">
        {suggestions.map((item) => {
          return (
            <SuggestionCard
              title={item.title}
              description={item.description}
              image={item.urlToImage}
              publishedAt={item.publishedAt}
            />
          );
        })}
      </div>
    </>
  );
}
