import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const FillButton: FC<IProps> = ({ ButtonText, className = "", type }) => {
  return (
    <button type={type} className={`${className} bg-[#0D3B66] text-white 
                       text-center rounded-[40px] cursor-pointer`}>
      {ButtonText}
    </button>
  );
};

export default FillButton;
