import React from "react";
import Select from "@mui/material/Select";

import "./FilterBox.scss";
import PriceSlider from "../PriceSlider/PriceSlider";
import { FormControl, InputLabel } from "@mui/material";

const FilterBox: React.FC = () => {
  return (
    <div className="FilterBox RawContainer">
      <div className="FilterBox-content Dflex Dflex-alignCenter">
        <h4 className="FilterBox-title">Trier par :</h4>
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
        <div className="FilterBox-item Dflex Dflex-alignCenter">
          <span>Prix (Fcfa) :</span> <PriceSlider />
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
