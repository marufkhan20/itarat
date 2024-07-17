import React from "react";

const CollectionDetails = ({ collection, showDetails, setShowDetails }) => {
  const { id, name, quality, gsm, colors, thumbnail } = collection || {};
  return (
    <div
      className={`fixed transition-all duration-300 ${
        showDetails ? "opacity-100 visible bg-black/65" : "opacity-0 invisible"
      } z-[9999] inset-0 min-h-screen w-full flex items-center justify-center`}
      onClick={() => setShowDetails(false)}
    >
      <div
        className="bg-white h-[80vh] w-full m-5 xl:m-0 xl:w-[1200px] p-5 rounded-2xl overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row gap-10 sm:flow-row">
          <img className="h-fit w-fit" src={thumbnail} alt="" />
          <div className="flex flex-col gap-6">
            <p
              className="
        font-medium text-base sm:text-xl
      "
            >
              Product name : {name}
            </p>
            <p
              className="
        font-medium text-base sm:text-xl
      "
            >
              Quality : {quality}
            </p>
            <p
              className="
        font-medium text-base sm:text-xl
      "
            >
              Clothes GSM : {gsm}
            </p>
            <p
              className="
        font-medium text-base sm:text-xl
      "
            >
              Colure Available :{" "}
              {colors?.map((color) => (
                <span>{color}, </span>
              ))}
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-32 flex items-center cursor-pointer gap-[14px]">
          <img className="w-8" src="/images/icons/love.png" alt="" />
          <p
            className="
        font-medium text-base sm:text-xl
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
