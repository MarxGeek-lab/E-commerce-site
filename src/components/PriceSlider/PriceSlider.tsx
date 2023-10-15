import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function PriceSlider() {
  const [value, setValue] = React.useState<number[]>([1000, 100000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  function valuetext(value: number) {
    return `${value} Fcfa`;
  }
  

  return (
    <Box sx={{ width: 200}}>
      <Slider
        getAriaLabel={() => 'Prix'}
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        min={1000}
        max={100000}
        style={{color: "white", height: "4px"}}
        valueLabelDisplay="on"
      />
    </Box>
  );
}