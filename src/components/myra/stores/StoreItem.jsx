import React from "react";

const StoreItem = ({ image, name }) => {
  return (
    <div>
      <div>
        <img src={`/images/myra/stores/${image}`} className="w-full" alt="" />
      </div>
      <h2 className="mt-5 text-[20px]">{name}</h2>
      <button className="text-sm font-bold uppercase text-black/40">
        view store
      </button>
    </div>
  );
};

export default StoreItem;
