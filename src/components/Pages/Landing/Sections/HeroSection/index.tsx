import React from "react";
import heroSectionImg from "../../../../../assets/images/HeroSectionImg/HeroSectionImg.jpg";
import SearchForm from "./SearchForm";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";

const HeroSection = async () => {
  const response = await GetSpecialVilas();
  const { houses } = response;

  return (
    <div
      className="min-h-[705px] rounded-[48px] bg-center bg-cover px-16 py-6 flex justify-between max-xl:block max-xl:px-6"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSectionImg.src}) center/cover`,
      }}
    >
      {/* landing Search */}
      <div className="w-[503px] rounded-[24px] dark:bg-dark bg-whiteColor py-6 px-7 text-center space-y-5 max-xl:w-full">
        <h2 className="text-[20px] text-primary dark:text-whiteColor font-bold">همین حالا رزرو کنید !</h2>
        <div className="flex justify-between px-13 max-sm:px-0 max-xl:px-20">
          <button
            className={`border border-primary text-primary dark:text-thidary dark:border-thidary px-4 py-2
                        text-[14px] max-sm:text-[12px] text-center rounded-[40px] cursor-pointer`}
          >
            رزرو ملک
          </button>
          <button
            className={`border border-lightGray text-gray dark:text-White px-4 py-2
                        text-[14px] max-sm:text-[12px] text-center rounded-[40px] cursor-pointer`}
          >
            رهن و اجاره
          </button><button
            className={`border border-lightGray text-gray dark:text-White px-4 py-2
                        text-[14px] max-sm:text-[12px] text-center rounded-[40px] cursor-pointer`}
          >
            خرید و فروش
          </button>
        </div>
        <SearchForm houses={houses}/>
      </div>
      {/* landing Search end */}
      {/* heroSection Content */}
      <div className="text-whiteColor w-[53%] space-y-6 py-[15.5%] max-xl:py-[7.5%] max-xl:w-full">
        <h1 className="font-bold text-[36px] max-xl:text-[30px]">خانه رویایی یا هتل دلخواهت رو اینجا پیدا کن</h1>
        <div>
          <p className="text-[24px] max-xl:text-[18px]">از خرید و فروش ملک تا اجاره کوتاه‌مدت هتل و آپارتمان؛</p>
          <p className="text-[24px] max-xl:text-[18px]">به راحتی جستجو کن، مقایسه کن و بهترین انتخاب رو داشته باش.</p>
        </div>
        <button
          className={`border border-whiteColor text-whiteColor px-7 py-1
                      text-[20px] max-xl:text-[18px] text-center rounded-[40px] cursor-pointer`}
        >
          رهن و اجاره ملک
        </button>
      </div>
      {/* heroSection Content end */}
    </div>
  );
};

export default HeroSection;
