import { IButtons } from "@/core/types/IButtons";
import { MoveRight } from "lucide-react";
import React, { FC } from "react";

const RightButton02: FC<IButtons> = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled
          ? "text-gray-500 dark:text-borderColor cursor-not-allowed"
          : "text-[#0D3B66] dark:text-thidary cursor-pointer"
      }`}
    >
      <MoveRight size={100} />
    </button>
  );
};

export default RightButton02;
