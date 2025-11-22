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
    <div className="flex flex-col gap-4 w-[48.5%] 2xl:w-[48.2%] max-2xl:w-[48.2%] max-xl:w-[47.5%] max-lg:w-[47.7%] max-md:w-[47.1%] max-sm:w-full">
      <h3>{label}</h3>
      <input
        type={type}
        value={value}
        onChange={(event) => setState && setState(event.target.value)}
        placeholder={placeHolder}
        className={`bg-whiteColor rounded-[16px] outline-0 text-primary placeholder:text-gray border border-borderColor p-3 indent-2 w-full ${className}`}
      />
    </div>
  );
};

export default AddPlaceFormInput;
