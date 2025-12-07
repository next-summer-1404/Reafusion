import React from "react";
import Image from "next/image";
import heroSectionImg from "../../../../../assets/images/HeroSectionImg/HeroSectionImg.jpg";
import SearchForm from "./SearchForm";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";

const HeroSection = async () => {
  const response = await GetSpecialVilas();
  const { houses } = response;

  return (
    <div className="relative min-h-[705px] rounded-[48px] overflow-hidden px-16 py-6 flex justify-between max-xl:block max-xl:px-6">
      {/* the performance of the landing page with image is 82 and without that is 93/92 */}
      <Image
        src={heroSectionImg.src}
        alt="heroSectionImg"
        fill
        priority          
        quality={85}
        placeholder="blur"  
        blurDataURL={heroSectionImg.blurDataURL} 
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-[503px] rounded-[24px] bg-whiteColor dark:bg-dark py-6 px-7 text-center space-y-5 max-xl:w-full">
        <h2 className="text-[20px] text-primary dark:text-whiteColor font-bold">
          همین حالا رزرو کنید !
        </h2>
        <div className="flex justify-between px-13 max-sm:px-0 max-xl:px-20 gap-2">
          <button className="border border-primary text-primary dark:text-thidary dark:border-thidary px-4 py-2 text-[14px] max-sm:text-[12px] rounded-[40px] cursor-pointer whitespace-nowrap">
            رزرو ملک
          </button>
          <button className="border border-lightGray text-gray dark:text-White px-4 py-2 text-[14px] max-sm:text-[12px] rounded-[40px] cursor-pointer whitespace-nowrap">
            رهن و اجاره
          </button>
          <button className="border border-lightGray text-gray dark:text-White px-4 py-2 text-[14px] max-sm:text-[12px] rounded-[40px] cursor-pointer whitespace-nowrap">
            خرید و فروش
          </button>
        </div>
        <SearchForm houses={houses} />
      </div>
      <div className="relative z-10 text-whiteColor w-[53%] space-y-6 py-[15.5%] max-xl:py-[7.5%] max-xl:w-full max-xl:mt-6">
        <h1 className="font-bold text-[36px] max-xl:text-[30px]">
          خانه رویایی یا هتل دلخواهت رو اینجا پیدا کن
        </h1>
        <div className="space-y-1">
          <p className="text-[24px] max-xl:text-[18px]">
            از خرید و فروش ملک تا اجاره کوتاه‌مدت هتل و آپارتمان؛
          </p>
          <p className="text-[24px] max-xl:text-[18px]">
            به راحتی جستجو کن، مقایسه کن و بهترین انتخاب رو داشته باش.
          </p>
        </div>
        <button className="border border-whiteColor text-whiteColor px-7 py-1 text-[20px] max-xl:text-[18px] rounded-[40px] cursor-pointer">
          رهن و اجاره ملک
        </button>
      </div>
    </div>
  );
};

export default HeroSection;