import Image from "next/image";
import React from "react";
import vilaImg from "../../../assets/images/VilaImgs/vilaImg.jpg";
import { ArrowUpLeft } from "lucide-react";

const VilaCard = () => {
  return (
    <div className="w-[312px] max-lg:w-[450px] max-md:w-full h-[126px] bg-borderColor  py-3 px-3  rounded-[24px] flex gap-5 mt-8">
      <div className="size-[100px] rounded-[16px] overflow-hidden bg-cover">
        <Image
          src={vilaImg}
          alt="vilaImg"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      </div>
      <div className="space-y-1.5 w-[60%] max-lg:w-[80%]">
        <h2 className="text-[20px] text-black">اجاره ویلا در رامسر</h2>
        <h3 className="text-[16px] text-gray ">50 مورد</h3>
        <div className="flex justify-between pt-3 text-primary text-[16px] cursor-pointer">
            <h3>مشاهده</h3>
            <ArrowUpLeft size={26} />
        </div>
      </div>
    </div>
  );
};

export default VilaCard;
