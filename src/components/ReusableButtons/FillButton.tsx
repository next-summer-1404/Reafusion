import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  className?: string;
}

const FillButton: FC<IProps> = ({ ButtonText, className = "" }) => {
  return (
    <button className={`${className} bg-[#0D3B66] text-white text-[20px] 
                       text-center rounded-[40px] cursor-pointer`}>
      {ButtonText}
    </button>
  );
};

export default FillButton;
