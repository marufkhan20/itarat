import collections from "../../../constants/collections";
import Heading from "../../myra/Heading";
import Line from "../../ui/Line";
import Collection from "./collection";

const Collections = () => {
  return (
    <section className="pt-8 pb-10">
      <div className="container">
        <div>
          <Heading>Collections</Heading>
          <Line type="secondary" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-11 mt-20">
          {collections?.map((collection) => (
            <Collection collection={collection} key={collection?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
