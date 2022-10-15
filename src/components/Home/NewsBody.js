import React, { useEffect, useState } from "react";
import RecentNews from "./RecentNews.js";
import News from "./News.js";
import "../../styles/Home/NewsBody.css";
import { Dna } from "react-loader-spinner";

export default function NewsBody(props) {
  const { category } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [recentNews, setRecentNews] = useState([]);
  const [news, setNews] = useState([]);

  const getNewsList = async () => {
    const url = `http://localhost:8000/api/news/${category}`;
    const data = await fetch(url);
    const newsList = await data.json();
    setRecentNews(newsList.articles.slice(0, 10));
    setNews(newsList.articles.slice(12, 21));
    setIsLoading(false);
  };

  useEffect(() => {
    getNewsList();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Dna
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="news-body-container">
          <RecentNews news={recentNews} category={category} />
          <News news={news} category={category} />
        </div>
      )}
    </>
  );
}
