import { IButtons } from "@/core/types/IButtons";
import { ChevronLeft } from "lucide-react";
import React, { FC } from "react";

const LeftButton: FC<IButtons> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[50%] left-[-25px] max-sm:left-[0px] z-50 bg-primary rounded-full size-[56px] 
                       flex justify-center items-center text-white cursor-pointer">
      <ChevronLeft size={40} />
    </button>
  );
};

export default LeftButton;
