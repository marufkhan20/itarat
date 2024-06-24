import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const SpecialSale = () => {
  return (
    <section className="py-5 bg-[#F8F8F8] h-fit!">
      <div className="container">
        <SubHeading>MEET OUR BESTSELLERS</SubHeading>
        <Heading>On Special SALE</Heading>

        <div className="mt-5 grid sm:grid-cols-3 gap-8">
          <div className="relative">
            <img
              src="/images/myra/special/1.webp"
              className="w-full h-full"
              alt=""
            />
            <div className="absolute bottom-12 left-14">
              <h2 className="uppercase text-lg font-bold text-white">
                chandrima
              </h2>
            </div>
          </div>
          <div className="relative col-span-2">
            <img
              src="/images/myra/special/2.webp"
              className="w-full h-full"
              alt=""
            />
            <div className="absolute bottom-12 left-14">
              <h2 className="uppercase text-lg font-bold text-white">
                sarang kaur
              </h2>
            </div>
          </div>
          <div className="relative col-span-2">
            <img
              src="/images/myra/special/3.webp"
              className="w-full h-full"
              alt=""
            />
            <div className="absolute bottom-12 left-14">
              <h2 className="uppercase text-lg font-bold text-white">
                sarang kaur
              </h2>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/myra/special/4.webp"
              className="w-full h-full"
              alt=""
            />
            <div className="absolute bottom-12 left-14">
              <h2 className="uppercase text-lg font-bold text-white">
                chandrima
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center">
          <Button>shop now</Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialSale;
