import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  className?: string;
}

const EmptyButton: FC<IProps> = ({ ButtonText, className = "" }) => {
  return (
    <button
      className={`${className} border border-primary text-primary 
                        font-bold max-md:text-[18px] text-center rounded-[40px] cursor-pointer`}
    >
      {ButtonText}
    </button>
  );
};

export default EmptyButton;
