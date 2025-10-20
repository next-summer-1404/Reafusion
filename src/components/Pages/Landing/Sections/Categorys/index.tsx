import CategoryCard from "@/components/Ui/CategoryCard";
import { GetHouseCategorys } from "@/core/Apis/GetHouseCategorys";
import { AxiosResponse } from "axios";
import React from "react";

interface ICategoryResponse {
  data: Array<{
    dataValues: {
      id: string;
      name: string;
    };
  }>;
  totalCount?: number;
}

const Categorys = async () => {
  const response = await GetHouseCategorys() as AxiosResponse<ICategoryResponse>;
  const { data } = response.data;
  console.log(data);

  return (
    // all houses categorys
    <div className="py-30 space-y-2">
      <h3 className="text-[#1E2022] text-[24px] font-bold">دسته بندی ها</h3>
      <div className="flex justify-around gap-2 flex-wrap">
        {/* category list */}
        {data.map((items, index) => (
          <CategoryCard key={index} CategoryName={items.dataValues.name} />
        ))}
        {/* category list end */}
      </div>
    </div>
    // all houses categorys finish
  );
};

export default Categorys;
