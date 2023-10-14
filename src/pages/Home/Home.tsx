import React from "react";
import Carousel from "react-multi-carousel";
import { FiChevronsRight } from "react-icons/fi";

import "react-multi-carousel/lib/styles.css";
import "./Home.scss";

import CardProductComponent from "../../components/CardProduct/CardProduct";

import img1 from "../../assets/images/img1.webp";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";

export interface Products {
	name: string;
	price: number;
	image: string;
}

const Home: React.FC = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const responsiveProduct = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	};

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
		<div className="Home">
			<div className="Home-sliderDiv RawContainer">
				<div className="Home-blockSlide">
                <Carousel
					responsive={responsive}
					autoPlay={true}
					infinite={true}
					showDots={false}
					className="Carousel"
				>
					<div className="Carousel-imgDiv">
						<img src={img1} alt="" />
					</div>
					<div className="Carousel-imgDiv">
						<img src={img1} alt="" />
					</div>
				</Carousel>
				<div className="Home-right">
					<span>
						Faite vos achat chez nous et <br />
						profitez gratuitement de <h1>nos offres de réduction</h1>
					</span>
				</div>
                </div>
			</div>
			<div className="RawContainer PromoProduct MBottomTop-6">
				<div className="HeaderSection">
					<h3 className="HeaderSection-title">Produit en promotion</h3>
					<span> Vite ! Profitez de nos offres de réduction</span>
					<a href="jhdh">
						Voir plus <FiChevronsRight />{" "}
					</a>
				</div>
				<div className="PromoProduct-groupProduct">
					<Carousel
						responsive={responsiveProduct}
						autoPlay={true}
						infinite={true}
						showDots={false}
					>
						{products.map((product, index) => (
							<CardProductComponent
								key={index.toString()}
								productImageSrc={product.image}
								productName={product.name}
								productPrice={product.price}
							/>
						))}
					</Carousel>
				</div>
			</div>
            <div className="ProductSection RawContainer">
                <h2 className="ProductSection-h1">Uniquement pour vous</h2>
                <div className="ProductSection-groupProduct">
                    {products.map((product, index) => (
                        <CardProductComponent
                            key={index.toString()}
                            productImageSrc={product.image}
                            productName={product.name}
                            productPrice={product.price}
                        />
                    ))}
                </div>
                <li className="ProductSection-btnSeeMore">
                    <a href="djjd">Voir plus <FiChevronsRight /></a>
                </li>
            </div>
            <div className="BannerContact RawContainer">
                <div className="BannerContact-backgroundShadow">
                    <p className="BannerContact-text">Pour besoin de s’adressé à notre service client,</p>
                    <li className="BannerContact-btnContact">
                        <a href="ijijed">Contactez-nous</a>
                    </li>
                </div>
            </div>
		</div>
	);
};

export default Home;
