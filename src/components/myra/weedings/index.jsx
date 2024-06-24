import React from "react";
import Heading from "../Heading";
import WeedingItem from "./WeedingItem";

const Weedings = () => {
  return (
    <section className="py-8">
      <div className="container">
        <Heading>Joyful Sunlit Weddings</Heading>
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <WeedingItem image="1.webp" name="Nidhi Tholia" />
          <WeedingItem image="2.webp" name="Nidhi Tholia" />
          <WeedingItem image="3.webp" name="Nidhi Tholia" />
          <WeedingItem image="4.webp" name="Nidhi Tholia" />
        </div>
      </div>
    </section>
  );
};

export default Weedings;
