import React from 'react';

import "./CardProduct.scss";

import add_cart from "../../assets/svg/add-to-cart.svg"
import whatsapp from "../../assets/svg/whatsapp-logo.svg"

interface CardPromoProductComponentProps {
  key: string;
  productName: string;
  productPrice: number;
  productImageSrc: string;
}

const CardPromoProductComponent: React.FC<CardPromoProductComponentProps> = ({
  productName,
  productPrice,
  productImageSrc,
  key
}) => {
  return (
    <div className="CardProduct" key={key}>
      <div className="CardProduct-percentReduce">25%</div>
      <img className="CardProduct-imgProd" src={productImageSrc} alt={productName} />
      <div className="CardProduct-footerCard">
        <div className="CardProduct-infosProd">
        <h3 className="CardProduct-nameProd EllipsisLine2">{productName}</h3>
          <h4 className="CardProduct-priceProd">
            {productPrice} Fcfa <span> 1200 Fcfa</span>
          </h4>
        </div>
        <div className="CardProduct-groupBtn">
          <button type='button' className="CardProduct-btnAddToCart">
            <img src={add_cart} alt="Add to Cart" />
          </button>
          <button type='button' className="CardProduct-btnContactToWhatsapp">
            <a href="https://wa.me/2347088366937" className="float" target="blank">
              <img src={whatsapp} alt="Contact on WhatsApp" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPromoProductComponent;
