import React from "react";
import { FaBuilding, FaMapMarked, FaPhone, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import "./Contact.scss";

const Contact:React.FC = () => {
    return(
        <div className="ContactPage RawContainer">
            <div className="ContactPage-cordonnee Cordonnee Dflex">
                <FaBuilding className="Cordonnee-avatar" />
                <div className="Cordonnee-infos">
                    <h2 className="Cordonnee-nameCompany"><span>Josey'</span> Store</h2>
                    <p className="Cordonnee-p"><FaPhoneAlt /> +22969816413</p>
                    <p className="Cordonnee-p"><FaMapMarked /> Bénin, Litoral, Cotonou</p>
                    <li className="Cordonnee-btnWhatsapp">
                        <a href="https://wa.me/2347088366937" className="Dflex Dflex-alignCenter"> <FaWhatsapp />Contactez-nous par whatsapp</a>
                    </li>
                </div>
            </div>
            <div className="ContactPage-contactForm ContactForm">
                <h1 className="ContactForm-h1">Contactez-nous</h1>
                <form className="ContactForm-form Dflex Dflex-alignCenter Dflex-col">
                    <label className="ContactForm-field Field Dflex Dflex-col">
                        <span className="Field-text">Nom et Prénom</span>
                        <input className="Field-input" type="text" placeholder="Votre nom et prénom..." required/>
                    </label>
                    <label className="ContactForm-field Field Dflex Dflex-col">
                        <span className="Field-text">E-mail</span>
                        <input className="Field-input" type="text" placeholder="Votre e-mail..." required/>
                    </label>
                    <label className="ContactForm-field Field Dflex Dflex-col">
                        <span className="Field-text">Object</span>
                        <input className="Field-input" type="text" placeholder="Object de votre message..." required/>
                    </label>
                    <label className="ContactForm-field Field Dflex Dflex-col">
                        <span className="Field-text">Message</span>
                        <textarea rows={10} placeholder="Votre message"> </textarea>
                    </label>
                    <button className="ContactForm-btnSend" type="button">Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;