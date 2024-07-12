import React from "react";
import { Link } from "react-router-dom";

const ArrivalItem = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7] rounded relative">
        <img src="/images/noya/5.png" className="rounded" alt="" />
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-base">Stoy</h3>
        <Link to="#" className="text-[#393939] font-medium mt-2 block">
          Vintage Tricycle With Parent Handle Candy Pink
        </Link>
        <h3 className="font-bold text-base mt-2">599$</h3>
      </div>
    </div>
  );
};

export default ArrivalItem;
