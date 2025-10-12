import React, { FC } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  customClass?: string;
  selectName01?: string;
  selectName02?: string;
  selectValue01?: string;
  selectValue02?: string;
  value?: string;
  setState?: (value: string) => void;
}

const CustomSelectOption: FC<IProps> = ({ customClass, labelText, selectName01, selectValue01,
  selectValue02, selectName02, value, setState, }) => {
  return (
    <div
      className={`${customClass} flex flex-col gap-4 w-[250px] max-md:w-full`}
    >
      <label htmlFor="" className="text-[#1E2022] font-bold">
        {labelText}
      </label>
      <div className="bg-[#F5F5F5] h-[46px] rounded-[40px] px-5 ">
        <select
          value={value}
          onChange={(event) => setState && setState(event.target.value)}
          className="w-full h-full py-3 outline-0"
        >
          <option value="">همه</option>
          <option value={selectValue01}>{selectName01}</option>
          <option value={selectValue02}>{selectName02}</option>
        </select>
      </div>
    </div>
  );
};

export default CustomSelectOption;
