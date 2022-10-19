import React from "react";
import { useLoaderData } from "react-router-dom";
import Newsummerycard from "../Shared/Newsummerycard/Newsummerycard";

const Category = () => {
  const CategoryNews = useLoaderData();
  return (
    <div>
      <h2>this category has total news {CategoryNews.length}</h2>
      {CategoryNews.map((news) => (
        <Newsummerycard key={news._id} news={news}></Newsummerycard>
      ))}
    </div>
  );
};

export default Category;
