import ProfileCompletionCircle from "@/components/Ui/ProfileCompletionCircle";
import React from "react";

const IncomeChart = () => {
  return (
    <div className="h-[254px] w-[48%] bg-whiteColor rounded-[24px] px-6 py-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-dark font-bold text-[20px]">نمودار درآمد</h3>
          <h4 className="text-gray text-[16px] pt-2">
            از تاریخ 1 تا 31 شهریور 1404
          </h4>
        </div>
        <select className="border border-borderColor h-[42px] px-4 rounded-[40px] flex justify-center items-center cursor-pointer">
          <option value="">ماه جاری</option>
          <option value="">درآمد کل</option>
        </select>
      </div>
      <div className="pt-3 flex justify-between items-end-safe">
        <div className="flex gap-6">
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <div className="size-[16px] bg-lightPrimary rounded-full"></div>
              <h3 className="text-gray text-[14px]">درآمد کل</h3>
            </div>
            <h3 className="text-dark text-[14px]">100,000,000 تومان</h3>
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <div className="size-[16px] bg-primary rounded-full"></div>
              <h3 className="text-gray text-[14px]">درآمد این ماه</h3>
            </div>
            <h3 className="text-dark text-[14px]">60,000,000 تومان</h3>
          </div>
        </div>
        <ProfileCompletionCircle percentage={60} />
      </div>
    </div>
  );
};

export default IncomeChart;
