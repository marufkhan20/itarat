import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-5">
          <Category image="1.webp" name="Kurtas" />
          <Category image="2.webp" name="Dresses" />
          <Category image="3.webp" name="Co-Ords" />
          <Category image="4.webp" name="Lenegas" />
          <Category image="5.webp" name="Kaftans" />
          <Category image="6.webp" name="Sarees" />
          <Category image="7.webp" name="Shararas" />
          <Category image="8.webp" name="Anarkalis" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
