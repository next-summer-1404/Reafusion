import React, { FC } from "react";

interface IProps {
  label: string;
  placeHolder: string;
  type: string;
  className?: string;
  value?: string;
  setState?: (value: string) => void;
}

const AddPlaceFormInput: FC<IProps> = ({ label, placeHolder, type, className, value, setState }) => {
  return (
    <div className="space-y-4">
      <h3>{label}</h3>
      <input
        type={type}
        value={value}
        onChange={(event) => setState && setState(event.target.value)}
        placeholder={placeHolder}
        className={`bg-whiteColor rounded-[16px] outline-0 text-primary placeholder:text-gray border border-borderColor p-3 indent-2 w-[500px] ${className}`}
      />
    </div>
  );
};

export default AddPlaceFormInput;
