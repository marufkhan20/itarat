import React from "react";
import { Link } from "react-router-dom";

const PackageItem = ({ image, name, description, price }) => {
  return (
    <Link to="#">
      <div>
        <img
          className="w-full rounded-[36px]"
          src={`/images/packages/${image}`}
          alt={name}
        />
      </div>
      <div className="flex items-center flex-col justify-center mt-6">
        <h3 className="text-[19px] text-[#738ca2] font-medium">{name}</h3>
        <p className="text-[#787878] text-[15px]">{description}</p>
        <span className="block mt-5 text-[#787878] text-[15px]">From</span>
        <h3 className="text-xl text-[#738ca2] font-normal">${price}.00</h3>
      </div>
    </Link>
  );
};

export default PackageItem;
