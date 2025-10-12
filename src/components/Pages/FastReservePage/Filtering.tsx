"use client";
import CustomInputSearch from "@/components/Ui/ReusableInputs/InputSearch";
import CustomSelectOption from "@/components/Ui/ReusableInputs/SelectOption";
import React, { FC, useEffect, useState } from "react";
import PriceRangeSlider from "./PriceRangeComponent";
import { useRouter, useSearchParams } from "next/navigation";

interface IProps {
  ItemLength?: number;
}

const FilteringList: FC<IProps> = ({ ItemLength }) => {
  // the hooks for access to SearchParams and can change that
  const router = useRouter();
  const searchParams = useSearchParams();
  // the hooks for access to SearchParams and can change that end

  // save the filtering data and conect that to searchParams
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [transactionType, setTransactionType] = useState(searchParams.get('transactionType') || "");
  const [minPrice, setMinPrice] = useState(Number(searchParams.get('minPrice') || 1000000));
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get('maxPrice') || 200000000));
  // save the filtering data and conect that to searchParams end

  // func for set min/max price to the searchParams
  const handlePriceRangeChanged = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  }
  // func for set min/max price to the searchParams end

  // connect values to the searchParams and put to work that
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', search);
    params.set('transactionType', transactionType)
    params.set('minPrice', minPrice.toString());
    params.set('maxPrice', maxPrice.toString());
    router.push(`?${params.toString()}`);
  }, [search, router, searchParams, transactionType, minPrice, maxPrice]);
  // connect values to the searchParams and put to work that end

  return (
    <div className="pt-10">
      <div className="w-[810px] max-xl:w-full flex justify-between text-[#0D3B66] text-[20px]">
        <h2 className="text-[24px] text-[#1E2022] font-bold">فیلتر ها</h2>
        <span>{ItemLength} نتیجه</span>
      </div>
      <div className="flex justify-between py-10 max-xl:block">
        <div className="border border-[#DDDDDD] space-y-7 w-[810px] max-xl:w-full max-xl:justify-around px-4 pt-6 max-md:pb-6 rounded-[24px] flex justify-between flex-wrap">
          <CustomInputSearch
            labelText="جستجو"
            placeholder="نام خانه مورد نظر ..."
            customClass="w-[378px]"
            value={search}
            setState={setSearch}
          />
          <CustomSelectOption
            labelText="مرتب سازی بر اساس"
            customClass="w-[378px]"
            value={transactionType}
            setState={setTransactionType}
            selectValue01={'rental'}
            selectValue02={'mortgage'}
            selectName01={'خانه های اجاره ای'}
            selectName02={'خانه های رهن'}
          />
          <CustomSelectOption
            labelText="امکانات خانه"
            customClass="w-[378px]"
          />
          <PriceRangeSlider setPriceRange={handlePriceRangeChanged} />
        </div>
        <div className="border border-[#DDDDDD] w-[575px] max-xl:w-full max-xl:mt-6 rounded-[24px] flex justify-center items-center py-10">
          MAP
        </div>
      </div>
    </div>
  );
};

export default FilteringList;
