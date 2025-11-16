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
    <div className="space-y-4">
      <h3>{label}</h3>
      <select value={value} onChange={(event) => setState && setState(event.target.value)} className="bg-whiteColor rounded-[16px] outline-0 text-primary placeholder:text-gray border border-borderColor p-3 w-[500px]">
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
