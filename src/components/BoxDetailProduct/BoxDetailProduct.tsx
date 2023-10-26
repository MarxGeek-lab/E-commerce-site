import React from "react";
import ImageZoom from "react-image-zooom";

import ProductSlide from "../ProductSlider/ProductSlide";

import product from "../../assets/images/product1.jpg";

import "./BoxDetailProduct.scss";
import SelectControlComponent from "../SelectControl/SelectControl";

interface BoxDetailProductComponentProps {
    isOpenDialogProductDetails: (bool: boolean) => void;
}

export const BoxDetailProductComponent: React.FC<BoxDetailProductComponentProps> = ({ isOpenDialogProductDetails }) => {

    const size = ["M", "S", "X", "XL"];
    const color = ["blue", "Rouge", "Black"];

    return (
        <div className="BoxDetailsProduct">
            <button className="Close Dflex Dflex-alignCenter Dflex-justifyCCenter" type="button"
                onClick={() => isOpenDialogProductDetails(false)}>&times;</button>
            <div className="BoxDetailsProduct-productPresentate Dflex">
                <div className="BoxDetailsProduct-img">
                    <ImageZoom src={product} alt="product" zoom="150" width="300" className="BoxDetailsProduct-imgZoom" />
                </div>
                <div className="BoxDetailsProduct-infosProduct">
                    <h1 className="BoxDetailsProduct-nameProduct EllipsisLine2">Basket chaussure</h1>
                    <h3 className="BoxDetailsProduct-price">1 250 Fcfa</h3>
                    <div className="BoxDetailsProduct-select Dflex Dflex-alignCenter">
                        <span>Color :</span>
                        <SelectControlComponent array={color} placeholder="Couleur" />
                    </div>
                    <div className="BoxDetailsProduct-select Dflex Dflex-alignCenter">
                        <span>Size :</span>
                        <SelectControlComponent array={size} placeholder="Taille" />
                    </div>
                    <div className="BoxDetailsProduct-description">
                        <span>Description : </span>
                        <div className="BoxDetailsProduct-text">
                            DescriptionDescriptionDescriptionDescriptionDescriptionDescription
                            DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                            DescriptionDescriptionDescription
                        </div>
                    </div>
                </div>
            </div>
            <div className="BoxDetailsProduct-productSlider">
                <ProductSlide />
            </div>
        </div>
);
};
