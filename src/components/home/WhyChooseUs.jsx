import React from "react";
import Heading from "../myra/Heading";
import Line from "../ui/Line";

const WhyChooseUs = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container">
        <Heading>Why Choose Us?</Heading>

        <Line />

        <div className="mt-40 grid lg:grid-cols-2 gap-20">
          <div className="relative h-[400px] sm:h-[500px]">
            <img
              src="/images/choose-us/2.png"
              className="absolute left-0 transition-all hover:z-40 hover:scale-150 top-0 w-[60%] sm:w-auto lg:w-[60%] xl:w-[50%] 2xl:w-auto"
              alt=""
            />
            <img
              src="/images/choose-us/1.png"
              className="absolute bottom-0 transition-all hover:z-40 hover:scale-150 z-30 left-[50%] translate-x-[-50%] w-[60%] sm:w-auto lg:w-[60%] xl:w-[50%] 2xl:w-auto"
              alt=""
            />
            <img
              className="absolute -top-20 transition-all hover:z-40 hover:scale-150 right-10 w-[60%] sm:w-auto lg:w-[60%] xl:w-[50%] 2xl:w-auto"
              src="/images/choose-us/3.png"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-center text-[30px] leading-[38px] italic mb-8">
              Artistic Vision and Style
            </h3>
            <p className="text-justify text-lg">
              Your unique artistic vision and distinctive style capture the
              essence and emotions of a wedding day beautifully. Your portfolio
              showcases a blend of candid moments, detailed shots, and
              breathtaking compositions that resonate with couples looking for
              more than just traditional wedding photos.{" "}
            </p>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-center text-[30px] leading-[38px] italic mb-8">
              Passion for Storytelling
            </h3>
            <p className="text-justify text-lg">
              Your passion for storytelling through photography is evident in
              every frame. You strive to tell the unique love story of each
              couple, capturing the essence of their relationship and the joy of
              their wedding day in a way that words cannot express.
            </p>
          </div>
          <div className="relative h-[400px] sm:h-[500px]">
            <img
              src="/images/choose-us/4.png"
              className="absolute transition-all hover:z-40 hover:scale-150 left-0 top-0 w-[60%] sm:w-auto lg:w-[60%] xl:w-[50%] 2xl:w-auto"
              alt=""
            />
            <img
              src="/images/choose-us/5.png"
              className="absolute bottom-0 z-30 left-[50%] translate-x-[-50%] transition-all hover:z-40 hover:scale-150 w-[60%] sm:w-auto lg:w-[60%] xl:w-[50%] 2xl:w-auto"
              alt=""
            />
            <img
              className="absolute -top-20 right-10 w-[60%] sm:w-auto lg:w-[60%] transition-all hover:z-40 hover:scale-150 xl:w-[50%] 2xl:w-auto"
              src="/images/choose-us/6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
