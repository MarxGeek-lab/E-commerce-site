import React from "react";
import PopupLayoutComponent from "../PopupLayout/PopupLayout";
import ProductSlide from "../ProductSlider/ProductSlide";
import { FormControl, InputLabel, Select } from "@mui/material";

import product from "../../assets/images/product1.jpg";

import "./BoxDetailProduct.scss";

const BoxDetailProductComponent:React.FC =() => {
    return (
        <PopupLayoutComponent>
            <div className="BoxDetailsProduct">
                <div className="BoxDetailsProduct-productPresentate Dflex">
                    <div className="BoxDetailsProduct-img">
                        <img src={product} alt="" />
                    </div>
                    <div className="BoxDetailsProduct-infosProduct">
                        <h1 className="BoxDetailsProduct-nameProduct EllipsisLine2">Basket chaussure</h1>
                        <h3 className="BoxDetailsProduct-price">1 250 Fcfa</h3>
                        <div className="BoxDetailsProduct-color">
                            <span>Color :</span>
                            <FormControl sx={{ mr: 5, minWidth: 120 }}>
                                <InputLabel
                                    htmlFor="grouped-native-select"
                                    sx={{mb: 20, color: "white", fontSize: "15px", position: "absolute", top: -10}}
                                >
                                    Catégories
                                </InputLabel>
                                <Select
                                    style={{
                                    height: "35px",
                                    border: "1px solid white",
                                    color: "white",
                                    fontSize: "16px",
                                    }}
                                    native
                                    defaultValue=""
                                    id="grouped-native-select"
                                    label="Grouping"
                                >
                                    <option aria-label="None" value="" />
                                    <optgroup label="Electronique">
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                    </optgroup>
                                    <optgroup label="Vêtements">
                                    <option value={3}>Option 3</option>
                                    <option value={4}>Option 4</option>
                                    </optgroup>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className="BoxDetailsProduct-productSlider">
                    <ProductSlide />
                </div>
            </div>
        </PopupLayoutComponent>
    );
};

export default BoxDetailProductComponent;