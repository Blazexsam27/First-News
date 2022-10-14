import React, { useEffect, useState } from "react";
import "../../styles/Home/Home.css";
import Category from "./Category";
import NewsBody from "./NewsBody";

export default function Home() {
  const [category, setCategory] = useState("general");
  const changeCategory = (e) => {
    setCategory(e.target.className);
  };

  return (
    <>
      <p className="webpage-heading">
        <span>First</span> News
      </p>
      <Category changeCategory={changeCategory} />
      <NewsBody category={category} />
    </>
  );
}
