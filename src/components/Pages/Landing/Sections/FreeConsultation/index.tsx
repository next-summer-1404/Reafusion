import React from "react";

const FreeConsultation = () => {
  return (
    <div className="min-h-[183px] bg-primary text-whiteColor flex justify-between items-center max-lg:block
                    rounded-[24px] py-9 px-18 max-lg:px-10 mt-30">
      <div className="space-y-4">
        <h1 className="text-[32px] max-md:[27px] max-lg:text-center font-bold">نیاز به راهنمایی دارید!؟</h1>
        <p className="text-[20px] max-lg:text-center font-light">
          کارشناسان ما همیشه آماده پاسخگویی به سوالات شما عزیزان هستند .
        </p>
      </div>
      <button className="bg-secondary text-whiteColor text-[20px] max-md:text-[18px] flex justify-center items-center 
                         h-[59px] px-20 rounded-[40px] cursor-pointer max-lg:mt-8 max-lg:m-auto">
        دریافت مشاوره رایگان
      </button>
    </div>
  );
};

export default FreeConsultation;
