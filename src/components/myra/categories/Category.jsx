import React from "react";
import { Link } from "react-router-dom";

const Category = ({ image, name }) => {
  return (
    <Link to="#">
      <div>
        <img
          className="w-full"
          src={`/images/myra/categories/${image}`}
          alt=""
        />
      </div>
      <h3 className="font-medium text-base text-center mt-3">{name}</h3>
    </Link>
  );
};

export default Category;
