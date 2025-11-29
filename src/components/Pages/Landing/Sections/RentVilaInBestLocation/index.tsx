import VilaCard from "@/components/Ui/VilaCard";
import React from "react";

const vilas = [
  { id: 1, name: 'اجاره ویلا در ساری', count: '24' },
  { id: 2, name: 'اجاره ویلا در رامسر', count: '40' },
  { id: 3, name: 'اجاره ویلا در چالوس', count: '31' },
  { id: 4, name: 'اجاره ویلا در بهشهر', count: '8' },
  { id: 5, name: 'اجاره ویلا در نوسهر', count: '13' },
  { id: 6, name: 'اجاره ویلا در نکا', count: '26' },
  { id: 7, name: 'اجاره ویلا در گرگان', count: '19' },
  { id: 8, name: 'اجاره ویلا در چمستان', count: '52' },

]

const RentVilaInBestLocation = () => {
  return (
    <div className="pb-30">
      {/* tap bar */}
      <div className="flex justify-between">
        <h3 className="text-dark text-[24px] dark:text-white max-sm:text-[20px] font-bold">
          اجاره ویلا در محبوب ترین مقاصد ایران
        </h3>
      </div>
      {/* tap bar end */}
      {/* the vila list */}
      <div className="flex justify-between flex-wrap">
        {vilas.map((items) => (
          <VilaCard key={items.id} name={items.name} count={items.count} />
        ))}
      </div>
      {/* the vila list end */}
    </div>
  );
};

export default RentVilaInBestLocation;
