import React from "react";
import heroSectionImg from "../../../../../assets/images/HeroSectionImg/HeroSectionImg.jpg";
import SearchForm from "./SearchForm";

const HeroSection = () => {
  return (
    <div
     className="h-[705px] rounded-[48px] bg-center bg-cover px-16 py-6 flex justify-between"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroSectionImg.src}) center/cover`,
      }}
    >   
      {/* landing Search */}
      <div className="w-[503px] rounded-[24px] bg-white py-6 px-7 text-center space-y-5">
          <h2 className="text-[20px] text-[#0D3B66] font-bold">همین حالا رزرو کنید !</h2>
          <div className="flex justify-between px-13">
            <button
            className={`border border-[#0D3B66] text-[#0D3B66] px-4 py-2
                        text-[14px] text-center rounded-[40px] cursor-pointer`}
            >
              رزرو ملک 
            </button>
            <button
            className={`border border-[#F5F5F5] text-[#777777] px-4 py-2
                        text-[14px] text-center rounded-[40px] cursor-pointer`}
            >
              رهن و اجاره 
            </button><button
            className={`border border-[#F5F5F5] text-[#777777] px-4 py-2
                        text-[14px] text-center rounded-[40px] cursor-pointer`}
            >
              خرید و فروش  
            </button>
          </div>
          <SearchForm />
      </div>
      {/* landing Search end */}
      {/* heroSection Content */}
      <div className="text-white w-[53%] space-y-6 py-[15.5%]">
          <h1 className="font-bold text-[36px]">خانه رویایی یا هتل دلخواهت رو اینجا پیدا کن</h1>
          <div>
            <p className="text-[24px]">از خرید و فروش ملک تا اجاره کوتاه‌مدت هتل و آپارتمان؛</p>
            <p className="text-[24px]">به راحتی جستجو کن، مقایسه کن و بهترین انتخاب رو داشته باش.</p>
          </div>
          <button
           className={`border border-white text-white px-7 py-1
                      text-[20px] text-center rounded-[40px] cursor-pointer`}
          >
            رهن و اجاره ملک
          </button>
      </div>
      {/* heroSection Content end */}
    </div>
  );
};

export default HeroSection;
