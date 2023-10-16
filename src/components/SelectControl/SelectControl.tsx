import React from "react";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel } from "@mui/material";

interface SelectControlComponentProps {
    array: string[];
    placeholder: string;
}

const SelectControlComponent:React.FC<SelectControlComponentProps> = ({array, placeholder}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };
  


    return (
        <FormControl sx={{ m: 1, minWidth: 280 }} size="small">
            <InputLabel id="demo-select-small-label">{placeholder}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{fontSize: "14px", height: "40px"}}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectControlComponent;