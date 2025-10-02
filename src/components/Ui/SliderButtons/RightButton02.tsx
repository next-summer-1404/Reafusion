import { MoveRight } from "lucide-react";
import React, { FC, MouseEventHandler } from "react";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const RightButton02: FC<IProps> = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        disabled
          ? "text-gray-500 cursor-not-allowed"
          : "text-[#0D3B66] cursor-pointer"
      }`}
    >
      <MoveRight size={100} />
    </button>
  );
};

export default RightButton02;
