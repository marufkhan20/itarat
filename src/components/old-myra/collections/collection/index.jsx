import React, { useState } from "react";
import CollectionDetails from "./CollectionDetails";

const Collection = ({ collection }) => {
  const { thumbnail } = collection || {};
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <div className="h-fit w-full overflow-hidden rounded-[66px] relative">
        <img
          src={thumbnail}
          className="w-full transition-all hover:scale-125"
          alt=""
        />
        <img
          src="/images/icons/love.png"
          className="absolute left-5 bottom-5 cursor-pointer"
          alt=""
        />
      </div>

      <div className="text-center mt-8">
        <button
          className="
          cursor-pointer font-medium 
          text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 
          leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[34px]
        "
          onClick={() => setShowDetails(true)}
        >
          View Details
        </button>
      </div>

      <CollectionDetails
        showDetails={showDetails}
        setShowDetails={setShowDetails}
        collection={collection}
      />
    </div>
  );
};

export default Collection;
