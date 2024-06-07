import Line from "../ui/Line";

const Portfolio = () => {
  return (
    <section className="pt-14 pb-28">
      <div className="container">
        <h2 className="text-center font-normal text-[28px] leading-[42px] sm:text-[36px] sm:leading-[54px] md:text-[44px] md:leading-[66px] lg:text-[54px] lg:leading-[82px]">
          Portfolio
        </h2>

        <Line />

        <div className="mt-9">
          <div className="flex items-center justify-between gap-2">
            <img className="w-full" src="/images/portfolio/1.png" alt="" />
            <img className="w-full" src="/images/portfolio/2.png" alt="" />
            <img className="w-full" src="/images/portfolio/3.png" alt="" />
          </div>

          <div className="flex justify-between gap-2 mt-2">
            <img className="w-full" src="/images/portfolio/4.png" alt="" />
            <div className="w-full">
              <img className="w-full" src="/images/portfolio/5.png" alt="" />
              <img className="w-full" src="/images/portfolio/6.png" alt="" />
            </div>
            <img className="w-full" src="/images/portfolio/7.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
