import Image from "next/image";
import React from "react";
import WhyChoseUsImg from '../../../../../assets/images/WhyChoseUsImg/WhyChoseUsImg.svg'

const WhyChoseUs = () => {
  return (
    <div className="bg-lightGray dark:bg-primary min-h-[500px] px-11.5 py-11 flex justify-between items-center max-lg:block">
      <div className="w-[51%] max-lg:w-full space-y-6">
        <h2 className="text-primary dark:text-thidary text-[32px] font-bold max-sm:text-[26px]">
          چرا باید ما رو انتخاب کنید؟
        </h2>
        <p className="text-dark text-[20px] dark:text-lightGray text-justify leading-9">
          پیدا کردن ویلای مناسب همیشه کار راحتی نیست. ما اینجاییم تا همه چیز رو
          برای شما ساده کنیم. از بین صدها فایل، فقط بهترین و معتبرترین گزینه‌ها
          رو گلچین می‌کنیم تا وقت ارزشمندتون صرف جستجوی بی‌پایان نشه. چه به
          دنبال اجاره کوتاه‌مدت برای تعطیلات باشین و چه به فکر خرید یا اجاره
          بلندمدت، ما با توجه به بودجه و نیاز شما، بهترین انتخاب‌ها رو معرفی
          می‌کنیم. پشتیبانی ۲۴ ساعته و همراهی قدم‌به‌قدم ما باعث میشه هیچوقت
          تنها نباشید و با خیال راحت ویلای رویایی خودتون رو پیدا کنید.
        </p>
      </div>
      <div className="w-[35%] max-xl:w-[40%] max-lg:w-full max-lg:flex justify-center items-center mt-3">
        <Image src={WhyChoseUsImg} alt="whychoseusimg" />
      </div>
    </div>
  );
};

export default WhyChoseUs;
