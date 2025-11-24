import ProfileCompletionCircle from "@/components/Ui/ProfileCompletionCircle";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  additionalPercentage: number;
  role: string;
}

const ProfileCompletionChart: FC<IProps> = ({ additionalPercentage, role }) => {
  return (
    <div className={`${role === 'buyer' ? 'w-[100%]' : 'w-[50%] max-sm:w-full'} bg-whiteColor dark:bg-background rounded-3xl p-5`}>
      <div className="flex max-md:flex-col gap-4 justify-between items-center">
        <div>
          <h3 className="text-dark dark:text-whiteColor font-bold text-[20px]">
            نمودار تکمیل پروفایل
          </h3>
          <h4 className="text-gray text-[16px] pt-2">
            پروفایل باید حداقل 6۰٪ تکمیل شده باشد.
          </h4>
        </div>
        <Link
          href={"/dashboard/profile"}
          className="border border-borderColor dark:border-primary dark:text-primary h-[42px] px-4 rounded-[40px] flex justify-center items-center cursor-pointer hover:bg-primary hover:text-whiteColor hover:border-primary transition-all duration-200"
        >
          ویرایش پروفایل
        </Link>
      </div>
      <div className="pt-19 flex justify-between items-end-safe">
        <h4 className="text-gray text-[14px]">آخرین ویرایش 3 روز پیش</h4>
        <ProfileCompletionCircle percentage={additionalPercentage} />
      </div>
    </div>
  );
};

export default ProfileCompletionChart;
