"use client";

import { FC, useState } from "react";
import Slider from "@mui/material/Slider";

interface IProps {
  setPriceRange?: (minPrice: number, maxPrice: number) => void;
  value01?: number;
  value02?: number;
  priceRangeName?: string
  className?: string;
}

const PriceRangeComponent: FC<IProps> = ({ setPriceRange, value01, value02, priceRangeName, className }) => {
  const [value, setValue] = useState([value01 as number, value02 as number]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
    if (setPriceRange) {
      setPriceRange(newValue[0], newValue[1]);
    }
  };

  return (
    <div className={`w-[378px] ${className} pt-1 px-6 max-md:w-full`}>
      <h3 className="text-dark text-[16px] font-bold">{priceRangeName}</h3>
      <Slider
        value={value}
        className="mt-1"
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={value01}
        max={value02}
        step={value01}
        sx={{
          '& .MuiSlider-track': {
            backgroundColor: '#0D3B66', // رنگ بخش پرشده
            height: '6px',
            borderRadius: '4px',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#D1D5DB', // رنگ بخش پرنشده (خاکستری روشن)
            height: '6px',
            borderRadius: '4px',
          },
          '& .MuiSlider-thumb': {
            color: '#0D3B66',
            width: '20px',
            height: '20px',
            border: '5px solid #0D3B66',
            backgroundColor: 'transparent',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        }}
      />
      <div className="flex justify-between text-sm">
        <span><span className="text-gray">حداقل</span> {value[0].toLocaleString()}</span>
        <span><span className="text-gray">حداکثر</span> {value[1].toLocaleString()}</span>
      </div>
    </div>
  );
}
export default PriceRangeComponent