import React from "react";
import Carousel from "react-multi-carousel";
import { FiChevronsRight } from "react-icons/fi";

import "react-multi-carousel/lib/styles.css";
import "./Home.scss";

import CardProductComponent from "../../components/CardProduct/CardProduct";
import { products } from "../Product/Product";

import img1 from "../../assets/images/img1.webp";
import CardPromoProductComponent from "../../components/CardProduct/CardPromoProduct";

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
			breakpoint: { max: 1024, min: 778 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 778, min: 0 },
			items: 2,
		},
	};

	return (
		<div className="Home">
			<div className="Home-sliderDiv RawContainer">
				<div className="Home-blockSlide">
					<Carousel
						responsive={responsive}
						autoPlay={true}
						infinite={true}
						showDots={false}
						removeArrowOnDeviceType={["tablet", "mobile"]}
						className="Carousel"
						containerClass="carousel-container"
						itemClass="carousel-item-padding-10-px"
					>
						<div className="Carousel-img">
							<img src={img1} alt="" />
						</div>
						<div className="Carousel-img">
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
							<CardPromoProductComponent
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
                <div className="ProductSection-groupProduct Container">
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
