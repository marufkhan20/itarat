import React from "react";
import Arrivals from "../components/noya/arrivals";
import Brands from "../components/noya/brands";
import Offers from "../components/noya/Offers";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/header";

const Noya = () => {
  return (
    <main>
      <Header />
      <Offers />
      <Arrivals />

      <section className="mt-12">
        <div className="container flex flex-col gap-12">
          <div className="relative">
            <img className="min-h-[165px]" src="/images/noya/6.jpg" alt="" />
            <div className="absolute inset-0 w-full h-full z-50 flex flex-col justify-center items-center gap-5 sm:gap-[50px] p-5">
              <h2 className="text-white text-[24px] leading-[32px] sm:text-[40px] text-center sm:leading-[44px] font-semibold">
                Wheat
              </h2>
              <div>
                <button className="p-5 py-4 rounded text-white bg-[#1a1a1a] transition-all hover:bg-[#393939] font-medium">
                  Shop now
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <img className="min-h-[165px]" src="/images/noya/7.jpg" alt="" />
            <div className="absolute inset-0 w-full h-full z-50 flex flex-col justify-end items-center gap-5 sm:gap-[50px] p-5">
              <h2 className="text-white text-[24px] leading-[32px] sm:text-[40px] text-center sm:leading-[44px] font-semibold">
                Bobo Choses
              </h2>
              <div className="sm:mb-11">
                <button className="p-5 py-4 rounded text-white bg-[#1a1a1a] transition-all hover:bg-[#393939] font-medium">
                  Discover
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <img className="min-h-[165px]" src="/images/noya/8.jpg" alt="" />
            <div className="absolute inset-0 w-full h-full z-50 flex flex-col justify-end items-center gap-5 sm:gap-[50px] p-5">
              <h2 className="text-white text-[24px] leading-[32px] sm:text-[40px] text-center sm:leading-[44px] font-semibold">
                BUGABOO
              </h2>
              <div className="sm:mb-11">
                <button className="p-5 py-4 rounded text-white bg-[#1a1a1a] transition-all hover:bg-[#393939] font-medium">
                  Shop here
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[165px]">
            <img className="min-h-[165px]" src="/images/noya/9.jpg" alt="" />
            <div className="absolute inset-0 w-full h-full z-50 flex flex-col justify-center items-center gap-5 sm:gap-[50px] p-5">
              <h2 className="text-white text-[24px] leading-[32px] sm:text-[40px] text-center sm:leading-[44px] font-semibold">
                Baby Birth Guide
              </h2>
              <div>
                <button className="p-5 py-4 rounded text-white bg-[#1a1a1a] transition-all hover:bg-[#393939] font-medium">
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brands />
      <Footer />
    </main>
  );
};

export default Noya;
