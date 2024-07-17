import React from "react";
import Line from "../ui/Line";

const UpcomingCollections = () => {
  return (
    <section className="py-40">
      <div className="container">
        <div className="flex flex-col gap-5">
          <h2
            className="
        text-center font-medium 
        text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] 
        leading-[36px] sm:leading-[48px] md:leading-[60px] lg:leading-[74px]
      "
          >
            Upcoming Collection
          </h2>
          <Line type="secondary" className="!w-[260px] sm:!w-[400px]" />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/upcoming-collections/1.png"
            className="w-full"
            alt=""
          />
          <img
            src="/images/upcoming-collections/2.png"
            className="w-full"
            alt=""
          />
          <img
            src="/images/upcoming-collections/5.png"
            className="w-full"
            alt=""
          />
          <img
            src="/images/upcoming-collections/4.png"
            className="w-full"
            alt=""
          />
          <img
            src="/images/upcoming-collections/6.png"
            className="w-full"
            alt=""
          />
          <img
            src="/images/upcoming-collections/3.png"
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingCollections;
