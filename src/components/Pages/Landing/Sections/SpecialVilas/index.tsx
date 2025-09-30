import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import React from "react";

const SpecialVilas = () => {
  return (
    <div className="pb-30">
      {/* section topBar */}
      <div className="flex justify-between">
        <h3 className="text-[#1E2022] text-[24px] font-bold">
          <span className="text-[#FF5555]">پیشنهادهای خاص</span> اجاره ویلا
        </h3>
        <EmptyButton ButtonText="مشاهده همه" className="px-4 py-1.5"/>
      </div>
      {/* section topBar */}
      {/* the slider of specialVilas for rent */}
      <div className="text-center text-red-600">
         اسلایدر ویلا ها ...
      </div>
      {/* the slider of specialVilas for rent end */}
    </div>
  );
};

export default SpecialVilas;
