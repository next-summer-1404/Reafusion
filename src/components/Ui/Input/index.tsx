'use client'
import React, { FC } from "react";

interface IProps {
  lable?: string;
  type?: string;
  name?: string;
  value?: string;
  setState?: (value: string) => void;
  placeholder?: string;
}

const Input: FC<IProps> = ({ lable, type, name, placeholder, value, setState }) => {
  return (
    <div>
      <h3 className="w-full text-[#1E2022] dark:text-borderColor text-[16px] font-bold text-right pb-3">
        {lable}
      </h3>
       <input
          name={name}
          type={type}
          value={value}
          onChange={(event) => setState?.(event.target.value)}
          placeholder={placeholder}
          className="w-full p-3 indent-2 bg-[#F5F5F5] dark:bg-gray rounded-[40px] cursor-pointer text-primary dark:text-White placeholder:text-[#777777] dark:placeholder:text-White outline-0"
        />
    </div>
  );
};

export default Input;
