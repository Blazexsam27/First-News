import React, { useEffect } from "react";
import "../../styles/Home/Home.css";
import CategoryNavbar from "../Widgets/CategoryNavbar";
import Trending from "./Trending";
import NewsBody from "./NewsBody";

export default function Home() {
  const getTrendingNews = async () => {
    const data = await fetch("/api/news", {
      method: "GET",
    });
    const parsedData = await data.json();
  };

  useEffect(() => {
    getTrendingNews();
  }, []);

  return (
    <>
      <p className="webpage-heading">
        <span>First</span> News
      </p>
      <CategoryNavbar />
      <Trending />
      <NewsBody />
    </>
  );
}
