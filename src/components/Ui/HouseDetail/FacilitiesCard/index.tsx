import { Bath, BedDouble, Database, House, LandPlot, SquareParking, User } from "lucide-react";
import React, { FC } from "react";

interface IProps {
  lable: string;
  title: string | number;
}

const FacilitiesCard: FC<IProps> = ({ lable, title }) => {
  return (
    <div className="border border-borderColor w-[230px] h-[75px] px-3 py-2.5 flex gap-3.5 rounded-[16px]">
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
      <div className="mt-[-4px] space-y-0.5">
        <p className="text-primary text-[20px] font-bold">{lable}</p>
        <p className="text-dark text-[20px]">{title}</p>
      </div>
    </div>
  );
};

export default FacilitiesCard;
