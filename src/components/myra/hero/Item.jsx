import React from "react";
import Button from "../Button";

const Item = ({ name, image }) => {
  return (
    <div className="relative sm:h-full">
      <img src={`/images/myra/latest/${image}`} className="w-full" alt="" />

      <div className="absolute bottom-3 sm:bottom-14 left-0 right-0 w-full flex flex-col items-center justify-center text-white">
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-medium text-white">
          {name}
        </h2>
        <span className="block sm:my-3 text-lg">A Play of Prints</span>
        <div className="mt-5">
          <Button type="light">shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default Item;
