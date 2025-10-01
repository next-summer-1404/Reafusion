import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import React from "react";
import Slider from "./Slider";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";
import { IHouse } from "@/core/types/IHouse";
import { AxiosResponse } from "axios";

interface IApiResponse {
  houses: IHouse[];
  totalCount?: number;
}

const SpecialVilas = async () => {
  // get houses Data 
  const response = await GetSpecialVilas() as AxiosResponse<IApiResponse>
  const { houses } = response.data;
  
  // filter all spacials house 
  const filterData = houses.filter((items) => items.discounted_price !== null);
  console.log('Data: ', filterData)

  return (
    <div className="pb-30 space-y-8">
      {/* section topBar */}
      <div className="flex justify-between">
        <h3 className="text-[#1E2022] text-[24px] font-bold">
          <span className="text-[#FF5555]">پیشنهادهای خاص</span> اجاره ویلا
        </h3>
        <EmptyButton ButtonText="مشاهده همه" className="px-4 py-1.5"/>
      </div>
      {/* section topBar */}
      {/* the slider of specialVilas for rent */}
      <Slider filterData={filterData}/>
      {/* the slider of specialVilas for rent end */}
    </div>
  );
};

export default SpecialVilas;
