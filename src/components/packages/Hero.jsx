import React from "react";

const Hero = () => {
  return (
    <section className="mt-10">
      <div
        className="container h-[180px]"
        style={{
          backgroundImage: "url(/images/packages/banner.png)",
          backgroundSize: "cover",
        }}
      ></div>
    </section>
  );
};

export default Hero;
