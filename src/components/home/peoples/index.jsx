import React from "react";
import Heading from "../../myra/Heading";
import Line from "../../ui/Line";
import People from "./People";

const Peoples = () => {
  return (
    <section className="pt-20 pb-10 bg-[#FAF9F6]">
      <div className="container">
        <Heading>Words from the people</Heading>

        <Line />

        <div className="mt-28 grid sm:grid-cols-2 gap-10 lg:gap-20">
          <People />
          <People />
        </div>
      </div>
    </section>
  );
};

export default Peoples;
