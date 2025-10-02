import Image from "next/image";
import React from "react";
import OurFeatureImage from "../../../../../assets/images/OurFeatureImg/OurFeatureImage.svg";
import { CircleCheckBig } from "lucide-react";

const features = [
  {
    featureTitle: "پشتیبانی کامل و شفافیت",
    features_01: "پاسخگویی سریع و ۲۴ ساعته",
    features_02: "توضیحات دقیق درباره شرایط ملک",
    features_03: "شفافیت در قیمت و قرارداد",
  },
  {
    featureTitle: "فایل‌های واقعی و به‌ روز",
    features_01: "فقط ویلاهای معتبر و تاییدشده",
    features_02: "به‌روزرسانی مداوم فایل‌ها",
    features_03: "حذف فایل‌های تکراری و نامعتبر",
  },
  {
    featureTitle: "تنوع گسترده ویلاها",
    features_01: "ویلاهای ساحلی، جنگلی و شهری",
    features_02: "گزینه‌های اقتصادی تا لوکس",
    features_03: "انتخاب متناسب با سبک زندگی شما",
  },
  {
    featureTitle: "مشاوره تخصصی و رایگان",
    features_01: "راهنمایی بر اساس بودجه و نیاز شما",
    features_02: "پیشنهاد بهترین مناطق برای اقامت",
    features_03: "همراهی تا عقد قرارداد",
  },
];

const OurFeatures = () => {
  return (
    <div className="flex justify-center gap-20 px-10">
      {/* section image */}
      <div className="w-[40%] flex justify-center items-center">
        <Image src={OurFeatureImage} alt="OurFeatureImage" />
      </div>
      {/* section image end */}
      {/* section contents  */}
      <div className="w-[45%] space-y-3">
        <h1 className="text-[32px] text-[#1E2022] font-bold">
          ویژگی‌هایی که ما را متفاوت می‌سازد
        </h1>
        <div className="flex flex-wrap justify-between">
          {features.map((items) => (
            <div key={items.featureTitle} className="space-y-4 pt-8">
              <h2 className="text-[#0D3B66] text-[24px] font-bold flex gap-2 justify-center items-center">
                <CircleCheckBig size={24} color="#FF7F11" />
                {items.featureTitle}
              </h2>
              <h3 className="text-[16px] text-[#777777]">{items.features_01}</h3>
              <h3 className="text-[16px] text-[#777777]">{items.features_02}</h3>
              <h3 className="text-[16px] text-[#777777]">{items.features_03}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* section contents end */}
    </div>
  );
};

export default OurFeatures;
