import React from "react";
import { ImageGallery } from "react-image-grid-gallery";
import Footer from "../components/home/Footer";
import Heading from "../components/myra/Heading";
import Header from "../components/shared/header";
import Line from "../components/ui/Line";

const PortfolioDetails = () => {
  const images = [
    {
      src: "/images/gallery/1.jpg",
      // width: 320,
      // height: 174,
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/gallery/2.jpg",
      // width: 320,
      // height: 212,
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" },
      // ],
      // alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/gallery/3.jpg",
      // width: 320,
      // height: 212,
    },
    {
      src: "/images/gallery/4.jpg",
      // width: 320,
      // height: 212,
    },
    {
      src: "/images/gallery/5.jpg",
      // width: 320,
      // height: 212,
    },
    {
      src: "/images/gallery/6.jpg",
      // width: 320,
      // height: 212,
    },
    {
      src: "/images/gallery/7.jpg",
      // width: 320,
      // height: 212,
    },
  ];
  return (
    <main>
      <Header />

      <section className="my-10">
        <div className="container">
          <Heading>Portfolio - Weeding</Heading>
          <Line />

          <div className="mt-10">
            <ImageGallery
              imagesInfoArray={images}
              columnCount={"auto"}
              columnWidth={400}
              gapSize={24}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PortfolioDetails;
