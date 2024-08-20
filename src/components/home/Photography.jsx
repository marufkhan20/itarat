import React from "react";
import Heading from "../myra/Heading";
import Line from "../ui/Line";

const Photography = () => {
  return (
    <section className="pt-20 pb-20 bg-[#FAF9F6]">
      <div className="container">
        <Heading>Photography Category</Heading>

        <Line />

        <div className="mt-28 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="relative group transition-all duration-500 overflow-hidden">
            <img className="w-full" src="/images/photography/1.png" alt="" />
            <div className="absolute transition-all duration-500 inset-0 left-[-200%] group-hover:left-0 w-full h-full bg-black/60 p-10 flex items-end">
              <h3 className="text-white">Photography 1</h3>
            </div>
          </div>
          <div className="relative group transition-all duration-500 overflow-hidden">
            <img className="w-full" src="/images/photography/2.png" alt="" />
            <div className="absolute transition-all duration-500 inset-0 left-[-200%] group-hover:left-0 w-full h-full bg-black/60 p-10 flex items-end">
              <h3 className="text-white">Photography 2</h3>
            </div>
          </div>
          <div className="relative group transition-all duration-500 overflow-hidden">
            <img className="w-full" src="/images/photography/3.png" alt="" />
            <div className="absolute transition-all duration-500 inset-0 left-[-200%] group-hover:left-0 w-full h-full bg-black/60 p-10 flex items-end">
              <h3 className="text-white">Photography 3</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
