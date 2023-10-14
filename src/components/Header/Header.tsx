import React from "react";
import { FiSearch } from "react-icons/fi";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import "./Header.scss"

import cart_logo from "../../assets/svg/cart.svg";
import CartShoppingBox from "../CartBox/CartBox";
import { CONTACT_PAGE, HOME_PAGE, PRODUCT_PAGE, PROMOTION_PAGE } from "../../settings/constant";


const Header: React.FC = () => {
    return (
        <div className="Header">
            <FloatingWhatsApp accountName="Max" phoneNumber="+22969816413" chatMessage="Bienvenu" statusMessage="hello" />
            <div className="Header-top">
                <div className="Container">
                    <li className="Header-logo"><span className="Header-logo">josey</span> <b className="Header-logo-text">Store</b></li>
                    <div className="Header-right">
                        <form action="" method="post" className="SearchForm">
                            <input className="SearchForm-input" type="search" name="keyword" placeholder="Rechercher ici" />
                            <button className="SearchForm-submit" type="submit"><FiSearch /></button>
                        </form>
                        <button type="button" className="Header-openCart">
                            <img src={cart_logo} alt="" />
                            <span className="Header-cart-count">0</span>
                        </button>
                        <CartShoppingBox />
                    </div>
                </div>
            </div>
            <nav className="MenuNav">
                <div className="RawContainer">
                    <ul className="MenuNav-ul">
                        <li className="MenuNav-li">
                            <a className="MenuNav-link" href={HOME_PAGE}>Accueil</a>
                        </li>
                        <li className="MenuNav-li">
                            <a className="MenuNav-link" href={PRODUCT_PAGE}>Nos Produits</a>
                        </li>
                        <li className="MenuNav-li">
                            <a className="MenuNav-link" href={PROMOTION_PAGE}>Nos Offres</a>
                        </li>
                        <li className="MenuNav-li">
                            <a className="MenuNav-link" href={CONTACT_PAGE}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Header;