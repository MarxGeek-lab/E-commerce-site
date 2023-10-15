import React from "react";
import Carousel from "react-multi-carousel";

import { products } from "../../pages/Product/Product";
import CardProductComponent from "../CardProduct/CardProduct";

import "react-multi-carousel/lib/styles.css";
import "./ProductSlider.scss";

const ProductSlide: React.FC = () => {
  const responsiveProduct = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 778 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 778, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="ProductSlider RawContainer">
      <Carousel responsive={responsiveProduct} autoPlay={true} infinite={true} showDots={false} className="ProductSlider-carousel">
        {products.map((product, index) => (
          <CardProductComponent
            key={index.toString()}
            productImageSrc={product.image}
            productName={product.name}
            productPrice={product.price}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductSlide;
