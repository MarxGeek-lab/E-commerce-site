import React from 'react';

import "./CartBox.scss";

import minus from "../../assets/svg/minus.svg";
import plus from "../../assets/svg/plus.svg";
import deletes from "../../assets/svg/delete.svg";
import product from "../../assets/images/product1.jpg";

interface CartShoppingBoxProps {
  openCartBox?: boolean;
  isOpenCartBox: (bool:boolean) => void;
}

const CartShoppingBox: React.FC<CartShoppingBoxProps> = ({openCartBox, isOpenCartBox}) => {
  return (
    <div className="CartShopping" style={openCartBox ? {display:"block"}:{display:"none"}}>
      <button className="CartShopping-close" type='button' onClick={() => isOpenCartBox(!openCartBox)}>&times;</button>
      <div className="CartShopping-head">
        <h6>Mon Panier</h6>
        <span>( 0 )</span>
      </div>
      <div className="CartShopping-body">
        <div className="CartShopping-groupProduct">
          <div className="CardProductCart">
            <img src={product} alt="Product" />
            <div className="CardProductCart-infosDiv">
              <div className="CardProductCart-info">
                <h3 className="CardProductCart-prodName">Name</h3>
                <h4 className="CardProductCart-prodPrice"> 1 200 Fcfa</h4>
                <div className="CardProductCart-qtyBox">
                  <button className="CardProductCart-btnMinus" type='button'>
                    <img src={minus} alt="Decrease Quantity" />
                  </button>
                  <span>0</span>
                  <button className="CardProductCart-btnPlus" type='button'>
                    <img src={plus} alt="Increase Quantity" />
                  </button>
                </div>
              </div>
              <button className="CardProductCart-btnTrash" type='button'>
                <img src={deletes} alt="Delete" />
              </button>
            </div>
          </div>
        </div>
        <div className="CartShopping-summary">
          <span>Prix Total :</span>
          <h5>0 Fcfa</h5>
        </div>
      </div>
      <div className="CartShopping-footer">
        <button className="CartShopping-btnCommand" type='button'>Lancer la commande</button>
      </div>
    </div>
  );
};

export default CartShoppingBox;
