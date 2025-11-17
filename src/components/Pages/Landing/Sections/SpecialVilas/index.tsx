import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import React from "react";
import Slider from "./Slider";
import { GetSpecialVilas } from "@/core/Apis/GetSpecialVilas";
import { AxiosResponse } from "axios";
import { IApiResponse } from "@/core/Types/IApiResForGetHouses";

const SpecialVilas = async () => {
  // get houses Data
  const response = (await GetSpecialVilas()) as AxiosResponse<IApiResponse>;
  const { houses } = response.data;

  const filterData = houses.filter(
    (item) =>
      !!item.discounted_price &&
      parseInt(item.discounted_price as string, 10) > 0
  );

  return (
    <div className="pb-30 space-y-8">
      {/* section topBar */}
      <div className="flex justify-between items-center">
        <h3 className="text-dark dark:text-White text-[24px] max-md:text-[20px] font-bold">
          <span className="text-red">پیشنهادهای خاص</span> اجاره ویلا
        </h3>
        <EmptyButton ButtonText="مشاهده همه" className="px-4 py-1.5" />
      </div>
      {/* section topBar */}
      {/* the slider of specialVilas for rent */}
      <Slider filterData={filterData} />
      {/* the slider of specialVilas for rent end */}
    </div>
  );
};

export default SpecialVilas;
