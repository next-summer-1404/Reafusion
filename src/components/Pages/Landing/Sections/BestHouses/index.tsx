import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import React from "react";
import Slider from "./Slider";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/core/Types/IApiResForGetHouses";


const BestHouses = async () => {
  const response = await GetSpecialVilas() as AxiosResponse<IApiResponse>;
  const { houses } = response.data

  const filterData = houses.filter((items) => items.discounted_price === null);

  return (
    <div className="py-27 space-y-5">
      {/* tap bar */}
      <div className="flex justify-between items-center">
        <h3 className="text-[#1E2022] text-[24px] max-lg:text-[17px] font-bold">
          بهترین انتخاب برای تعطیلات و اقامت
        </h3>
        <EmptyButton ButtonText="مشاهده همه" className="px-4 py-1.5"/>
      </div>
      {/* tap bar end */}
      {/* slider of best Houses for rent */}
      <Slider filterData={filterData}/>
      {/* slider of best Houses for rent end */}
    </div>
  );
};

export default BestHouses;
