import React, { FC } from "react";

interface IProps {
  ButtonText: string;
  onClick: () => void;
}

const NormalButton: FC<IProps> = ({ ButtonText, onClick }) => {
  return (
    <button onClick={onClick} className="bg-[#F5F5F5] p-2.5 px-7 flex justify-center items-center 
                     text-[#777777] text-[20px] rounded-[40px] cursor-pointer">
       {ButtonText}
    </button>
  );
};

export default NormalButton;
