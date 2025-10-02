import React from "react";

const FreeConsultation = () => {
  return (
    <div className="h-[183px] bg-[#0D3B66] text-white flex justify-between items-center 
                    rounded-[24px] py-9 px-18 mt-30">
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold">نیاز به راهنمایی دارید!؟</h1>
        <p className="text-[20px] font-light">
          کارشناسان ما همیشه آماده پاسخگویی به سوالات شما عزیزان هستند . 
        </p>
      </div>
      <button className="bg-[#FF7F11] text-white text-[20px] flex justify-center items-center 
                         h-[59px] px-20 rounded-[40px] cursor-pointer">
        دریافت مشاوره رایگان
      </button>
    </div>
  );
};

export default FreeConsultation;
