import React, { FC } from "react";

interface Option {
  value: string;
  label: string;
}

interface DynamicSelectOptionProps {
  label?: string;
  options: Option[];
  value?: string;
  setState?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const AddPlaceFromSelectOption: FC<DynamicSelectOptionProps> = ({ label, options, value, setState }) => {
  return (
    <div className="flex flex-col gap-4 w-[48.5%] 2xl:w-[48.2%] max-2xl:w-[48.2%] max-xl:w-[47.5%] max-lg:w-[47.7%] max-md:w-[47.1%] max-sm:w-full">
      <h3>{label}</h3>
      <select value={value} onChange={(event) => setState && setState(event.target.value)} className="bg-whiteColor rounded-[16px] outline-0 text-primary placeholder:text-gray border border-borderColor p-3 w-full">
        {options.map((items, index) => (
          <option key={index} value={items.value}>
            {items.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddPlaceFromSelectOption;
