import React from "react";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import StoreItem from "./StoreItem";

const Stores = () => {
  return (
    <section className="py-8">
      <div className="container">
        <SubHeading>STORE LOCATOR</SubHeading>
        <Heading>Visit Our Stores</Heading>
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <StoreItem image="1.webp" name="New Delhi" />
          <StoreItem image="2.webp" name="Mombai" />
          <StoreItem image="3.webp" name="Kolkata" />
          <StoreItem image="4.webp" name="Hyderabad" />
        </div>
      </div>
    </section>
  );
};

export default Stores;
