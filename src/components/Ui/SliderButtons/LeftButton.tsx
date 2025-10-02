import { ChevronLeft } from "lucide-react";
import React, { FC, MouseEventHandler } from "react";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

const LeftButton: FC<IProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[50%] left-[-25px] z-50 bg-[#0D3B66] rounded-full size-[56px] 
                       flex justify-center items-center text-white cursor-pointer">
      <ChevronLeft size={40} />
    </button>
  );
};

export default LeftButton;
