import CategoryCard from "@/components/Ui/CategoryCard";
import { GetHouseCategorys } from "@/core/Apis/GetHouseCategorys";
import React from "react";

const Categorys = async () => {
  const response = await GetHouseCategorys();
  const { data } = response;
  console.log(data);

  return (
    // all houses categorys
    <div className="py-30 space-y-2">
      <h3 className="text-dark text-[24px] font-bold dark:text-white">دسته بندی ها</h3>
      <div className="flex justify-around gap-2 flex-wrap">
        {/* category list */}
        {data.map((items, index) => (
          <CategoryCard key={index} CategoryName={items.name} />
        ))}
        {/* category list end */}
      </div>
    </div>
    // all houses categorys finish
  );
};

export default Categorys;
