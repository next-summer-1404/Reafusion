import React from "react";
import apartmentImg from "../../../../../assets/images/HomeImgs/05.jpg";
import vilaImg from "../../../../../assets/images/HomeImgs/04.webp";
import estaghrdarImg from "../../../../../assets/images/HomeImgs/03.jpeg";
import melksahelyImg from "../../../../../assets/images/HomeImgs/06.webp";
import melkKolbeImg from "../../../../../assets/images/HomeImgs/02.jpg";
import boomgardyImg from "../../../../../assets/images/HomeImgs/01.png";
import { ArrowUpLeft } from "lucide-react";

const Categorys = () => {
  return (
    // all houses categorys
    <div className="py-30 space-y-7">
      <h3 className="text-[#1E2022] text-[24px] font-bold">دسته بندی ها</h3>
      <div className="h-[542px] flex gap-10">
        {/* apartments */}
        <div
          className="w-[325px] rounded-[24px] bg-center bg-cover flex justify-between"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${apartmentImg.src}) center/cover`,
          }}
        >
          <div className="bg-white h-[43px] px-4 relative top-[88%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
            آپارتمان
          </div>
          <div className="size-[43px] rounded-full bg-white relative top-[88%] left-5.5 text-[#1E2022] flex justify-center items-center cursor-pointer">
            <ArrowUpLeft size={25} />
          </div>
        </div>
        {/* apartments end */}
        {/* vila and vila with pool */}
        <div className="w-[325px] space-y-10.5">
          <div
            className="h-[250px] rounded-[24px] bg-center bg-cover flex justify-between"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${vilaImg.src}) center/cover`,
            }}
          >
            <div className="bg-white h-[43px] px-4 relative top-[74%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
              ملک ویلایی
            </div>
            <div className="size-[43px] rounded-full bg-white relative top-[74%] left-5.5 text-[#1E2022] flex justify-center items-center cursor-pointer">
              <ArrowUpLeft size={25} />
            </div>
          </div>
          <div
            className="h-[250px] rounded-[24px] bg-center bg-cover flex justify-between"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${estaghrdarImg.src}) center/cover`,
            }}
          >
            <div className="bg-white h-[43px] px-4 relative top-[74%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
              استخر دار
            </div>
            <div className="size-[43px] rounded-full bg-white relative top-[74%] left-5.5 text-[#1E2022] flex justify-center items-center  cursor-pointer">
              <ArrowUpLeft size={25} />
            </div>
          </div>
        </div>
        {/* vila and vila with pool end */}
        {/* cottage and beach vila */}
        <div className="w-[325px] space-y-10.5">
          <div
            className="h-[250px] rounded-[24px] bg-center bg-cover flex justify-between"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${melkKolbeImg.src}) center/cover`,
            }}
          >
            <div className="bg-white h-[43px] px-4 relative top-[74%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
              ملک کلبه
            </div>
            <div className="size-[43px] rounded-full bg-white relative top-[74%] left-5.5 text-[#1E2022] flex justify-center items-center cursor-pointer">
              <ArrowUpLeft size={25} />
            </div>
          </div>
          <div
            className="h-[250px] rounded-[24px] bg-center bg-cover flex justify-between"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${melksahelyImg.src}) center/cover`,
            }}
          >
            <div className="bg-white h-[43px] px-4 relative top-[74%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
              ملکه ساحلی
            </div>
            <div className="size-[43px] rounded-full bg-white relative top-[74%] left-5.5 text-[#1E2022] flex justify-center items-center  cursor-pointer">
              <ArrowUpLeft size={25} />
            </div>
          </div>
        </div>
        {/* cottage and beach vila end */}
        {/* ecotourism houses*/}
        <div
          className="w-[325px] rounded-[24px] bg-center bg-cover flex justify-between"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${boomgardyImg.src}) center/cover`,
          }}
        >
          <div className="bg-white h-[43px] px-4 relative top-[88%] right-5.5 pt-1.5 rounded-[40px] text-center text-[#1E2022] text-[20px]">
            بوم گردی
          </div>
          <div className="size-[43px] rounded-full bg-white relative top-[88%] left-5.5 text-[#1E2022] flex justify-center items-center cursor-pointer">
            <ArrowUpLeft size={25} />
          </div>
        </div>
        {/* ecotourism houses end */}
      </div>
    </div>
    // all houses categorys finish
  );
};

export default Categorys;
