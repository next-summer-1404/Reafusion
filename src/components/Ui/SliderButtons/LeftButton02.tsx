import { IButtons } from "@/core/types/IButtons";
import { MoveLeft } from "lucide-react";
import React, { FC } from "react";

const LeftButton02: FC<IButtons> = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled ? "text-gray-500 dark:text-borderColor cursor-not-allowed"
        : "text-[#0D3B66] dark:text-thidary cursor-pointer"
      }`}
    >
      <MoveLeft size={100} />
    </button>
  );
};

export default LeftButton02;
