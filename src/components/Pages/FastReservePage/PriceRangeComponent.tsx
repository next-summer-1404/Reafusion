"use client";

import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function PriceRangeComponent() {
  const [value, setValue] = useState([1000000, 20000000]);

  const handleChange = (event: Event , newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <div className="w-[378px] pt-1 px-6 max-md:w-full">
      <h3 className="text-[#1E2022] text-[16px] font-bold">رنج قیمت</h3>
      <Slider
        value={value}
        className="mt-1"
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={1000000}
        max={20000000}
        step={100000}
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
        <span><span className="text-[#777777]">حداقل</span> {value[0].toLocaleString()}</span>
        <span><span className="text-[#777777]">حداکثر</span> {value[1].toLocaleString()}</span>
      </div>
    </div>
  );
}