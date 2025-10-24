import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const FillButton: FC<IProps> = ({ ButtonText, className = "", type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={`${className} bg-[#0D3B66] text-white 
                       font-bold text-center rounded-[40px] cursor-pointer dark:bg-thidary dark:text-white`}>
      {ButtonText}
    </button>
  );
};

export default FillButton;
