import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  className?: string;
}

const EmptyButton: FC<IProps> = ({ ButtonText, className = "" }) => {
  return (
    <button
      className={`${className} border border-[#0D3B66] text-[#0D3B66] 
                       text-[20px] text-center rounded-[40px] cursor-pointer`}
    >
      {ButtonText}
    </button>
  );
};

export default EmptyButton;
