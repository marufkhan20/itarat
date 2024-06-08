import collections from "../../../constants/collections";
import Line from "../../ui/Line";
import Collection from "./collection";

const Collections = () => {
  return (
    <section className="pt-8">
      <div className="container">
        <div>
          <h2
            className="
        text-center font-medium 
        text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] 
        leading-[34px] sm:leading-[44px] md:leading-[54px] lg:leading-[74px]
      "
          >
            Our Collection
          </h2>
          <Line type="secondary" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 mt-20">
          {collections?.map((collection) => (
            <Collection collection={collection} key={collection?.id} />
          ))}
        </div>

        <div className="flex items-center justify-center flex-col mt-20">
          <button className="font-medium text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-[28px] sm:leading-[36px] md:leading-[42px] lg:leading-[54px cursor-pointer">
            View More
          </button>
          <Line type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
