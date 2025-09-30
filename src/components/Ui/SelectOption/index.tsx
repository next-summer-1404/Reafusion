import { ChevronDown } from "lucide-react";
import React, { FC } from "react";

interface IProps {
  lable: string;
}

const SelectOption: FC<IProps> = ({ lable }) => {
  return (
    <div>
      <h3 className="text-[#1E2022] text-[16px] font-bold text-right pb-3">{lable}</h3>
      <div className="relative">
          <select
            className="w-full p-3 bg-[#F5F5F5] indent-1 rounded-[40px] cursor-pointer text-[#777777] appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              یک گزینه انتخاب کنید
            </option>
            <option value="rent">رهن و اجاره</option>
          </select>
          <ChevronDown
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1E2022]"
            size={25}
          />
        </div>
    </div>
  );
};

export default SelectOption;
