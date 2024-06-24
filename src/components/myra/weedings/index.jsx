import React from "react";
import Heading from "../Heading";
import WeedingItem from "./WeedingItem";

const Weedings = () => {
  return (
    <section className="py-8">
      <div className="contianer">
        <Heading>Joyful Sunlit Weddings</Heading>
        <div className="mt-5 grid grid-cols-4 gap-8">
          <WeedingItem image="1" name="Nidhi Tholia" />
        </div>
      </div>
    </section>
  );
};

export default Weedings;
