import React from "react";

const Offers = () => {
  return (
    <section className="mt-5">
      <div className="container flex flex-col gap-12">
        <div>
          <img src="/images/noya/1.jpg" alt="" />
        </div>
        <div>
          <img src="/images/noya/2.jpg" alt="" />
        </div>
        <div className="grid md:grid-cols-2">
          <div className="relative">
            <img src="/images/noya/3.jpg" alt="" />
            <div className="absolute inset-0 w-full h-full z-50 flex flex-col justify-center items-center gap-[50px] bg-black/30 p-5">
              <h2 className="text-white text-[24px] leading-[32px] sm:text-[40px] sm:leading-[44px] font-semibold">
                Occasionwear for kids
              </h2>
              <div>
                <button className="p-5 py-4 rounded text-white bg-[#1a1a1a] transition-all hover:bg-[#393939] font-medium">
                  Let's party
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/images/noya/4.jpg" alt="" />
            <div className="absolute inset-0 w-full h-full z-50 flex flex-col justify-center items-center gap-[50px] bg-black/30 p-5">
              <h2 className="text-white text-[24px] leading-[32px] sm:text-[40px] sm:leading-[44px] font-semibold">
                Beach holidays with kids
              </h2>
              <div>
                <button className="p-5 py-4 rounded text-white bg-[#1a1a1a] transition-all hover:bg-[#393939] font-medium">
                  Prepare for the sun
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
