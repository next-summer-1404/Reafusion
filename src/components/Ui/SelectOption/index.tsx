import { IHouse } from "@/core/types/IHouse";
import { ChevronDown } from "lucide-react";
import React, { FC } from "react";

interface IProps {
  lable: string;
  houses: IHouse[];
}

const SelectOption: FC<IProps> = ({ lable, houses }) => {
  return (
    <div>
      <h3 className="text-[#1E2022] text-[16px] font-bold text-right pb-3">{lable}</h3>
      <div className="relative !max-h-[30px]">
          <select
            className="w-full p-3 bg-[#F5F5F5] dark:bg-gray indent-1 rounded-[40px] cursor-pointer text-[#777777] dark:text-White appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              یک گزینه انتخاب کنید
            </option>
            {houses.map((items) => (
              <option className="" key={items.id} value={items.title}>{items.title}</option>
            ))}
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
