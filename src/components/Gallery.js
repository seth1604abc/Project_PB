import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import Carousel from "react-bootstrap/Carousel";

const Gallery = ({ images }) => {
  const items = images.map((image) => {
    return (
      <Carousel.Item >
        <img
          className=" m-0 p-0"
          src={`/product_images/${image.name}`}
          alt={image.name}
          style={{width:"35rem",height:"35rem",objectFit:"contain" ,overflow:"hidden"}}
        />
      </Carousel.Item>
    );
  });

  return (
    <>
      <Carousel>{items}</Carousel>
    </>
  );
};

export default Gallery;
