import React from "react";
import ArrivalItem from "./ArrivalItem";

const Arrivals = () => {
  return (
    <section className="py-14">
      <div className="container">
        <h2 className="font-semibold text-lg">NEW ARRIVALS</h2>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ArrivalItem />
          <ArrivalItem />
          <ArrivalItem />
          <ArrivalItem />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
