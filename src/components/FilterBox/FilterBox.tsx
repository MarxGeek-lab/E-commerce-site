import React from "react";

import "./FilterBox.scss";
import PriceSlider from "../PriceSlider/PriceSlider";

const FilterBox: React.FC = () => {

    return (
        <div className="FilterBox RawContainer">
            <div className="FilterBox-content">
                <h4>Trier par :</h4>
                <div className="FilterBox-item">
                    <select>
                        <option selected disabled>Catégorie</option>
                        <option selected disabled>Vêtements</option>
                        <option selected disabled>Electronique</option>
                    </select>
                </div>
                <div className="FilterBox-item">
                    Prix : <PriceSlider />
                </div>
            </div>
        </div>
    );
};

export default FilterBox;