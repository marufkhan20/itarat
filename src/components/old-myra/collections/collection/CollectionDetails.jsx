import React from "react";

const CollectionDetails = ({ collection, showDetails, setShowDetails }) => {
  const { id, name, quality, gsm, colors, thumbnail } = collection || {};
  return (
    <div
      className={`fixed transition-all duration-300 ${
        showDetails ? "opacity-100 visible bg-black/65" : "opacity-0 invisible"
      } z-40 inset-0 min-h-screen w-full flex items-center justify-center`}
      onClick={() => setShowDetails(false)}
    >
      <div
        className="bg-white w-full m-5 xl:m-0 xl:w-[1200px] p-5 rounded-2xl overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-10 flex-col sm:flow-row">
          <img className="h-fit w-fit" src={thumbnail} alt="" />
          <div className="flex flex-col gap-6">
            <p
              className="
        font-medium 
        text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] 
        leading-[32px] sm:leading-[36px] md:leading-[46px] lg:leading-[62px]
      "
            >
              Product name : {name}
            </p>
            <p
              className="
        font-medium 
        text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] 
        leading-[32px] sm:leading-[36px] md:leading-[46px] lg:leading-[62px]
      "
            >
              Quality : {quality}
            </p>
            <p
              className="
        font-medium 
        text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] 
        leading-[32px] sm:leading-[36px] md:leading-[46px] lg:leading-[62px]
      "
            >
              Clothes GSM : {gsm}
            </p>
            <p
              className="
        font-medium 
        text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] 
        leading-[32px] sm:leading-[36px] md:leading-[46px] lg:leading-[62px]
      "
            >
              Colure Available :{" "}
              {colors?.map((color) => (
                <span>{color}, </span>
              ))}
            </p>
          </div>
        </div>
        <div className="mt-32 flex items-center cursor-pointer gap-[14px]">
          <img className="" src="/images/icons/love.png" alt="" />
          <p
            className="
        font-medium 
        text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] 
        leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[49px]
      "
          >
            Add To Watch List{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
