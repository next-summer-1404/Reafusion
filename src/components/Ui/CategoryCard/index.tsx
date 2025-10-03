import { ArrowUpLeft } from "lucide-react";
import React, { FC } from "react";
import vilaImg from "../../../assets/images/HomeImgs/04.webp";
import apartmentImg from "../../../assets/images/HomeImgs/05.jpg";
import estaghrdarImg from "../../../assets/images/HomeImgs/03.jpeg";
// import melksahelyImg from "../../..//assets/images/HomeImgs/06.webp";
import melkKolbeImg from "../../../assets/images/HomeImgs/02.jpg";
// import boomgardyImg from "../../../assets/images/HomeImgs/01.png";

interface IProps {
  CategoryName: string;
}

const CategoryCard: FC<IProps> = ({ CategoryName }) => {
  return (
    <div className="w-[325px] h-[250px] mt-8 max-xl:w-[550px] max-lg:w-full">
      <div
        className="h-[250px] rounded-[24px] bg-center bg-cover flex justify-between"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${
            CategoryName === "ویلا"
              ? vilaImg.src
              : CategoryName === "مسکونی"
              ? apartmentImg.src
              : CategoryName === "جنگلی" 
              ? melkKolbeImg.src 
              : CategoryName === "مدرن"
              ? estaghrdarImg.src 
              : ''
          }) center/cover`,
        }}
      >
        <div className="bg-white h-[43px] px-4 relative top-[74%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
          {CategoryName}
        </div>
        <div className="size-[43px] rounded-full bg-white relative top-[74%] left-5.5 text-[#1E2022] flex justify-center items-center cursor-pointer">
          <ArrowUpLeft size={25} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
