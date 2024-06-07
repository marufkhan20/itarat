import Line from "../ui/Line";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-[32px] leading-[48px] sm:text-[48px] sm:leading-[72px] md:text-[64px] md:leading-[99px]">
          Our Service
        </h2>

        <Line />

        <div className="mt-6 grid md:grid-cols-2 gap-12">
          <div className="flex justify-between items-center gap-5 mt-16">
            <div>
              <img src="/images/services/1.png" alt="" />
              <img src="/images/services/2.png" alt="" />
            </div>
            <div>
              <img src="/images/services/3.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-center font-medium text-[40px] leading-[60px] sm:text-[64px] sm:leading-[96px] md:text-[80px] md:leading-[120px] lg:text-[96px] lg:leading-[148px]">
              Iitarat
            </h2>

            <Line />
            <p className="mt-6 font-medium text-[20px] leading-[30px] sm:text-[28px] sm:leading-[42px] md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[62px]">
              Capture The Best Precious Moments With Iitarat Frames
            </p>

            <button className="inline-block mt-6 font-medium text-[18px] leading-[28px] sm:text-[22px] sm:leading-[34px] md:text-[24px] md:leading-[36px] lg:text-[28px] lg:leading-[44px] px-4 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3.5 border rounded-[24px] border-black">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
