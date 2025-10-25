"use client";
import CustomInputSearch from "@/components/Ui/ReusableInputs/InputSearch/index";
import CustomSelectOption from "@/components/Ui/ReusableInputs/SelectOption";
import { FC, useEffect, useState } from "react";
import PriceRangeComponent from "../../FastReservePage/PriceRangeComponent";
import { useRouter, useSearchParams } from "next/navigation";

interface IProps {
  itemsLenght: number | undefined;
}

const FilterBox: FC<IProps> = ({ itemsLenght }) => {
  // the next hook for get the url and can change that 
  const router = useRouter();
  const searchParams = useSearchParams();
  // the next hook for get the url and can change that end
  // save data in the state for set to Url
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [transactionType, setTransactionType] = useState(searchParams.get('transactionType') || '');
  const [minMortgage, setMinMortgage] = useState(Number(searchParams.get('minMortgage')) || 10000);
  const [maxMortgage, setMaxMortgage] = useState(Number(searchParams.get('maxMortgage')) || 200000000);
  const [minRent, setMinRent] = useState(Number(searchParams.get('minRent')) || 10000);
  const [maxRent, setMaxRent] = useState(Number(searchParams.get('maxRent')) || 200000000);
  const [minArea, setMinArea] = useState(Number(searchParams.get('minArea')) || 10000);
  const [maxArea, setMaxArea] = useState(Number(searchParams.get('maxArea')) || 200000000);
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [sort, setSort] = useState(searchParams.get('sort') || '')
  // save data in the state for set to Url end
  // the function for send data of the range input to parent
  const handlePriceRangeChanged = (min: number, max: number) => {
    setMinMortgage(min);
    setMaxMortgage(max);
  };
  const handlePriceRangeChanged02 = (min: number, max: number) => {
    setMinRent(min);
    setMaxRent(max);
  };
  const handlePriceRangeChanged03 = (min: number, max: number) => {
    setMinArea(min)
    setMaxArea(max)
  }
  // the function for send data of the range input to parent end
  // set data in Url and can make change that 
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', search);
    params.set('transactionType', transactionType)
    params.set('minMortgage', minMortgage.toString())
    params.set('maxMortgage', maxMortgage.toString())
    params.set('minRent', minRent.toString())
    params.set('maxRent', maxRent.toString())
    params.set('minArea', minArea.toString())
    params.set('maxArea', maxArea.toString())
    params.set('sort', sort)
    params.set('location', location)
    router.push(`?${params.toString()}`);
  }, [searchParams, router, search, transactionType, minMortgage, maxMortgage,
    minRent, maxRent, minArea, maxArea, location, sort])
  // set data in Url and can make change that end

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-dark dark:text-white">فیلتر ها</span>
        <span className="text-xl text-primary dark:text-thidary">{itemsLenght} نتیجه</span>
      </div>
      <div className="flex flex-wrap dark:border-thidary justify-around px-4 pt-7 max-lg:pb-7 space-y-10 rounded-3xl border border-borderColor">
        <CustomInputSearch
          labelText="جستجو"
          placeholder="جستجو کنید ..."
          value={search}
          setState={setSearch}
          name="search"
          customClass="w-[480px]"
        />
        <CustomSelectOption
          labelText="مرتب‌سازی بر اساس"
          name="sort"
          value={sort}
          setState={setSort}
          customClass="w-[247px]"
          options={[
            { value: "price", label: "قیمت" },
          ]}
        />
        <CustomSelectOption
          labelText="نوع ملک"
          name="propertyType"
          customClass="w-[247px]"
          options={[
            { value: "villa", label: "ویلایی" },
            { value: "apartment", label: "آپارتمانی" },
            { value: "house", label: "خانه" },
          ]}
        />
        <CustomSelectOption
          labelText="نوع معامله"
          name="transactionType"
          value={transactionType}
          setState={setTransactionType}
          customClass="w-[247px]"
          options={[
            { value: "rental", label: "خانه های اجاره ای" },
            { value: "mortgage", label: "خانه های رهن" },
          ]}
        />
        <CustomSelectOption
          labelText="محل مورد نظر"
          name="location"
          value={location}
          setState={setLocation}
          customClass="w-[247px]"
          options={[
            { value: "تهران", label: "تهران" },
            { value: "ساری", label: "ساری" },
            { value: "شیراز", label: "شیراز" },
            { value: "اصفهان", label: "اصفهان" },
            { value: "بابل", label: "بابل" },
            { value: "چالوس", label: "چالوس" },
            { value: "رشت", label: "رشت" },
            { value: "دوبی", label: "دوبی" },
          ]}
        />
        <PriceRangeComponent
          setPriceRange={handlePriceRangeChanged}
          value01={10000}
          value02={200000000}
          priceRangeName={"رنج مبلغ رهن"}
          className="!w-[335px]"
        />
        <span className="border border-borderColor max-lg:border-none"></span>
        <PriceRangeComponent
          setPriceRange={handlePriceRangeChanged02}
          value01={10000}
          value02={200000000}
          priceRangeName={"رنج مبلغ اجاره"}
          className="!w-[335px]"
        />
        <span className="border border-borderColor max-md:border-none"></span>
        <PriceRangeComponent
          setPriceRange={handlePriceRangeChanged03}
          value01={10000}
          value02={200000000}
          priceRangeName={"متراژ ملک"}
          className="!w-[330px]"
        />
      </div>
    </div>
  );
};

export default FilterBox;