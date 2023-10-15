import React from "react";

import "./Offers.scss";
import { products } from "../Product/Product";
import FilterBox from "../../components/FilterBox/FilterBox";
import CardPromoProductComponent from "../../components/CardProduct/CardPromoProduct";

const Offers:React.FC = () => {

    
    return (
        <div className="OffersPage">
            <FilterBox />
            <div className="OffersPage-groupProduct Container">
                {products.map((product, index) => (
                    <CardPromoProductComponent
                        key={index.toString()}
                        productImageSrc={product.image}
                        productName={product.name}
                        productPrice={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Offers;