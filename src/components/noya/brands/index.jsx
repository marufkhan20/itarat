import React from "react";
import Brand from "./Brand";

const Brands = () => {
  return (
    <section className="mt-14 mb-24">
      <div className="container">
        <h2 className="font-semibold text-lg">BRANDS WE LOVE</h2>
        <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <Brand />
          <Brand />
          <Brand />
          <Brand />
        </div>
      </div>
    </section>
  );
};

export default Brands;
