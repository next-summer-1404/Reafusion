import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  className?: string;
  onClick?: () => void;
}

const EmptyButton: FC<IProps> = ({ ButtonText, className = "", onClick }) => {
  return (
    <button onClick={onClick}
      className={`${className} border border-primary dark:border-white text-primary  dark:text-white
                        font-bold max-md:text-[18px] text-center rounded-[40px] cursor-pointer`}
    >
      {ButtonText}
    </button>
  );
};

export default EmptyButton;
