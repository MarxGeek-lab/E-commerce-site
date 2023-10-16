import React, { useState } from 'react';

import "./CardProduct.scss";

import add_cart from "../../assets/svg/add-to-cart.svg"
import whatsapp from "../../assets/svg/whatsapp-logo.svg"
import BoxDetailProductComponent from '../BoxDetailProduct/BoxDetailProduct';

interface CardProductComponentProps {
  key: string;
  productName: string;
  productPrice: number;
  productImageSrc: string;
}

const CardProductComponent: React.FC<CardProductComponentProps> = ({
  productName,
  productPrice,
  productImageSrc,
  key
}) => {

  const [open, isOpen] = useState<boolean>(false);

  return (
    <div className="CardProduct" key={key} >
      {/* <BoxDetailProductComponent openPopup={open} isOpenPopup={isOpen} /> */}
      <img className="CardProduct-imgProd" src={productImageSrc} alt={productName} />
      <div className="CardProduct-footerCard">
        <div className="CardProduct-infosProd">
          <h3 className="CardProduct-nameProd EllipsisLine2">{productName}</h3>
          <h4 className="CardProduct-priceProd">
            {productPrice} Fcfa
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

export default CardProductComponent;
