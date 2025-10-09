import CustomInputSearch from "@/components/Ui/ReusableInputs/InputSearch";
import CustomSelectOption from "@/components/Ui/ReusableInputs/SelectOption";
import React, { FC } from "react";
import PriceRangeSlider from "./PriceRangeComponent";

interface IProps {
  ItemLength?: number;
}

const FilteringList: FC<IProps> = ({ ItemLength }) => {
  return (
    <div className="pt-10">
      <div className="w-[810px] max-xl:w-full flex justify-between text-[#0D3B66] text-[20px]">
        <h2 className="text-[24px] text-[#1E2022] font-bold">فیلتر ها</h2> 
        <span>{ItemLength} نتیجه</span>
      </div>
      <div className="flex justify-between py-10 max-xl:block">
        <div className="border border-[#DDDDDD] space-y-7 w-[810px] max-xl:w-full max-xl:justify-around px-4 pt-6 max-md:pb-6 rounded-[24px] flex justify-between flex-wrap">
          <CustomInputSearch labelText="جستجو" placeholder="نام خانه مورد نظر ..." customClass="w-[378px]" />
          <CustomSelectOption labelText="مرتب سازی بر اساس" customClass="w-[378px]" />
          <CustomSelectOption labelText="امکانات خانه" customClass="w-[378px]" />
          <PriceRangeSlider />
        </div>
        <div className="border border-[#DDDDDD] w-[575px] max-xl:w-full max-xl:mt-6 rounded-[24px] flex justify-center items-center py-10">MAP</div>
      </div>
    </div>
  );
};

export default FilteringList;
