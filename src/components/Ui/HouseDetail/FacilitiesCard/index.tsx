import { Bath, BedDouble, Database, House, LandPlot, SquareParking, User } from "lucide-react";
import React, { FC } from "react";

interface IProps {
  lable: string;
  title: string | number;
}

const FacilitiesCard: FC<IProps> = ({ lable, title }) => {
  return (
    <div className="border border-borderColor w-[23%] max-sm:w-full max-md:w-[47%] max-xl:w-[31%] h-[75px] px-3 py-2.5 flex gap-3.5 rounded-[16px]">
      <div className="size-[52px] bg-lightGray rounded-[12px] flex justify-center items-center text-secondary">
        {(lable === "نوع بنا" && <House />) ||
          (lable === "ظرفیت بنا" && <Database />) ||
          (lable === "اتاق خواب" && <BedDouble />) ||
          (lable === 'تعداد پارکینک' && <SquareParking />) ||
          (lable === 'حمام' && <Bath />) ||
          (lable === 'نوع حیاط' && <LandPlot />) ||
          (lable === 'نام فروشنده' && <User />)
        }
      </div>
      <div className="mt-[-4px] space-y-0.5 w-[70%]">
        <p className="text-primary dark:text-thidary text-[20px] font-bold truncate w-full">{lable}</p>
        <p className="text-dark text-[20px] dark:text-borderColor truncate w-full">{title}</p>
      </div>
    </div>
  );
};

export default FacilitiesCard;
