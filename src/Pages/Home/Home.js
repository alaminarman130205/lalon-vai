import React from "react";
import { useLoaderData } from "react-router-dom";
import Newsummerycard from "../Shared/Newsummerycard/Newsummerycard";

const Home = () => {
  const AllNews = useLoaderData();
  return (
    <div>
      <h2>Dragon News quantity{AllNews.length}</h2>
      {AllNews.map((news) => (
        <Newsummerycard key={news._id} news={news}></Newsummerycard>
      ))}
    </div>
  );
};

export default Home;
