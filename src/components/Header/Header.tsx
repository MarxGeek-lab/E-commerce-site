import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import "./Header.scss";

import cart_logo from "../../assets/svg/cart.svg";
import CartShoppingBox from "../CartBox/CartBox";
import { CONTACT_PAGE, HOME_PAGE, PRODUCT_PAGE, PROMOTION_PAGE } from "../../settings/constant";
import BoxDetailProductComponent from "../BoxDetailProduct/BoxDetailProduct";

const Header: React.FC = () => {
  const [openCartBox, isOpenCartBox] = useState(false);

  const openFormSearchMobile = (e:React.MouseEvent) => {
    e.preventDefault();
    const overlay = document.querySelector(".FormSearchMobile");
    overlay?.classList.add("open");
  };

  const closeFormSearchMobile = (e:React.MouseEvent) => {
    e.preventDefault();
    const overlay = document.querySelector(".FormSearchMobile");
    if(e.target !== overlay) return;
    overlay?.classList.remove("open");
  };

  return (
    <div className="Header">
      <FloatingWhatsApp
        accountName="Max"
        phoneNumber="+22969816413"
        chatMessage="Bienvenu"
        statusMessage="hello"
      />
      <BoxDetailProductComponent />
      <div className="FormSearchMobile"  onClick={closeFormSearchMobile}>
        <form action="" method="post" className="SearchForm">
          <input
            className="SearchForm-input"
            type="search"
            name="keyword"
            placeholder="Rechercher ici"
          />
          <button className="SearchForm-submit" type="submit">
            <FiSearch />
          </button>
        </form>
      </div>
      <div className="Header-top">
        <div className="Container">
          <li className="Header-logo">
            <span className="Header-logo">josey'</span> <b className="Header-logo-text">Store</b>
          </li>
          <div className="Header-right">
            <form action="" method="post" className="SearchForm">
              <input
                className="SearchForm-input"
                type="search"
                name="keyword"
                placeholder="Rechercher ici"
              />
              <button className="SearchForm-submit" type="submit">
                <FiSearch />
              </button>
              <button className="SearchForm-submit2" type="button" onClick={openFormSearchMobile}>
                <FiSearch />
              </button>
            </form>
            <div className="Header-cartDiv CartBox Dflex Dflex-alignCenter">
              <div className="CartBox-infosCart Dflex Dflex-col Dflex-alignEnd">
                <span>Mon Painer</span>
                <b>1200 Fcfa</b>
              </div>
              <button
                type="button"
                className="CartBox-openCart"
                onClick={() => isOpenCartBox(!openCartBox)}
              >
                <img src={cart_logo} alt="" />
                <span className="CartBox-cart-count">0</span>
              </button>
            </div>
            <CartShoppingBox openCartBox={openCartBox} isOpenCartBox={isOpenCartBox} />
          </div>
        </div>
      </div>
      <nav className="MenuNav">
        <div className="RawContainer">
          <ul className="MenuNav-ul">
            <li className="MenuNav-li">
              <a className="MenuNav-link" href={HOME_PAGE}>
                Accueil
              </a>
            </li>
            <li className="MenuNav-li">
              <a className="MenuNav-link" href={PRODUCT_PAGE}>
                Nos Produits
              </a>
            </li>
            <li className="MenuNav-li">
              <a className="MenuNav-link" href={PROMOTION_PAGE}>
                Nos Offres
              </a>
            </li>
            <li className="MenuNav-li">
              <a className="MenuNav-link" href={CONTACT_PAGE}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
