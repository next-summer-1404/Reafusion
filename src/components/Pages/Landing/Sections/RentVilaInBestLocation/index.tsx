import VilaCard from "@/components/Ui/VilaCard";
import React from "react";

const RentVilaInBestLocation = () => {
  return (
    <div className="pb-30">
      {/* tap bar */}
      <div className="flex justify-between">
        <h3 className="text-[#1E2022] text-[24px] max-sm:text-[20px] font-bold">
          اجاره ویلا در محبوب ترین مقاصد ایران
        </h3>
      </div>
      {/* tap bar end */}
      {/* the vila list */}
      <div className="flex justify-between flex-wrap">
        {Array.from({ length: 8 }, (_, i) => (
          <VilaCard key={i} />
        ))}
      </div>
      {/* the vila list end */}
    </div>
  );
};

export default RentVilaInBestLocation;
