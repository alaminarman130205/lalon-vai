import React from "react";
import { Link } from "react-router-dom";

const Term = () => {
  return (
    <div>
      <h3>here is our term and condition</h3>
      <p>
        go back to register <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Term;
