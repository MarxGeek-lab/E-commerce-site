import React from "react";

import "./Product.scss";
import FilterBox from "../../components/FilterBox/FilterBox";
import CardProductComponent from "../../components/CardProduct/CardProduct";
import { Products } from "../Home/Home";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";


const Product: React.FC = () => {

    const products: Products[] = [
        {
            name: "Basket",
            price: 1200,
            image: product1,
        },
        {
            name: "T-shirt",
            price: 1200,
            image: product2,
        },
        {
            name: "Jeans",
            price: 1500,
            image: product3,
        },
        {
            name: "Basket",
            price: 1200,
            image: product4,
        },
        {
            name: "T-shirt",
            price: 800,
            image: product5,
        },
        {
            name: "Jeans",
            price: 1500,
            image: product6,
        },
        {
            name: "Basket",
            price: 1200,
            image: product7,
        },
        {
            name: "T-shirt",
            price: 800,
            image: product7,
        },
        {
            name: "Jeans",
            price: 1500,
            image: product8,
        },
    ];

    return (
        <div className="ProductPage">
            <FilterBox />
            <div className="ProductPage-groupProduct Container">
                {products.map((product, index) => (
                    <CardProductComponent
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

export default Product;