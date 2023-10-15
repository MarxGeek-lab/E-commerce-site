import React from "react";

import "./Footer.scss";

import facebook from "../../assets/svg/facebook-logo.svg";
import twitter from "../../assets/svg/twitter-logo.svg";
import tiktok from "../../assets/svg/tiktok-logo.svg";
import location from "../../assets/svg/location.svg";
import phone from "../../assets/svg/phone.svg";

const Footer: React.FC = () => {
    return (
        <footer className="Footer">
            <div className="Container">
                <div className="Footer-block">
                    <ul className="Footer-ul">
                        <li><a href="Nos Produits">Nos Produits</a></li>
                        <li><a href="Nos offres">Nos Offres</a></li>
                    </ul>
                </div>
                <div className="Footer-block">
                    <li className="Footer-li">
                        <img src={phone} alt="Phone Icon" />
                        <a href="tel:+22969816413">Nos +229 69 81 64 13</a>
                    </li>
                    <li className="Footer-li">
                        <img src={location} alt="Location Icon" />
                        Bénin, Littoral, Cotonou
                    </li>
                </div>
                <div className="Footer-block">
                    <span>Suivez-nous sur :</span>
                    <ul className="Footer-groupSocial">
                        <li><a href="zezez"><img src={facebook} alt="Facebook Icon" /></a></li>
                        <li><a href="zeze"><img src={twitter} alt="Twitter Icon" /></a></li>
                        <li><a href="ezez"><img src={tiktok} alt="TikTok Icon" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="Footer-copyright">
                <p>&copy; {new Date().getFullYear()}. Réalisé par <b>MarxTeck</b></p>
            </div>
        </footer>
    );
};

export default Footer;