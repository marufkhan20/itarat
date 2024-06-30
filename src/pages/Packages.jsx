import React from "react";
import Footer from "../components/home/Footer";
import Hero from "../components/packages/Hero";
import PackageItem from "../components/packages/PackageItem";
import Header from "../components/shared/header";

const Packages = () => {
  return (
    <main>
      <Header />
      <Hero />

      <section className="my-12">
        <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <PackageItem
            name="The Elopement Package »"
            description="Accommodates up to 2 guests"
            image="1.jpg"
            price="200"
          />
          <PackageItem
            name="The Elopement Package »"
            description="Accommodates up to 2 guests"
            image="2.jpg"
            price="200"
          />
          <PackageItem
            name="The Elopement Package »"
            description="Accommodates up to 2 guests"
            image="3.jpg"
            price="200"
          />
          <PackageItem
            name="The Elopement Package »"
            description="Accommodates up to 2 guests"
            image="4.jpg"
            price="200"
          />
          <PackageItem
            name="The Elopement Package »"
            description="Accommodates up to 2 guests"
            image="5.jpg"
            price="200"
          />
          <PackageItem
            name="The Elopement Package »"
            description="Accommodates up to 2 guests"
            image="6.jpg"
            price="200"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Packages;
