import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4>All Categories {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftsidenav;
