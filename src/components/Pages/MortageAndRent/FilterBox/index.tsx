"use client";
import CustomInputSearch from "@/components/Ui/ReusableInputs/InputSearch/index";
import CustomSelectOption from "@/components/Ui/ReusableInputs/SelectOption";
import { FC } from "react";
import PriceRangeComponent from "../../FastReservePage/PriceRangeComponent";

interface IProps {
  itemsLenght: number | undefined;
}

const FilterBox: FC<IProps> = ({ itemsLenght }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-[#1E2022]">فیلترها</span>
        <span className="text-xl text-[#0d3b66]">{itemsLenght} نتیجه</span>
      </div>
      <div className="flex flex-wrap justify-around px-4 pt-7 max-lg:pb-7 space-y-10 rounded-3xl border border-[#DDDDDD]">
        <CustomInputSearch
          labelText="جستجو"
          placeholder="جستجو کنید ..."
          name="search"
          customClass="!w-[480px]"
        />
        <CustomSelectOption
          labelText="مرتب‌سازی بر اساس"
          name="sort"
          customClass="!w-[247px]"
          options={[
            { value: "price", label: "قیمت" },
          ]}
        />
        <CustomSelectOption
          labelText="نوع ملک"
          name="propertyType"
          customClass="!w-[247px]"
          options={[
            { value: "villa", label: "ویلایی" },
            { value: "apartment", label: "آپارتمانی" },
            { value: "house", label: "خانه" },
          ]}
        />
        <CustomSelectOption
          labelText="نوع معامله"
          name="transactionType"
          customClass="!w-[247px]"
          options={[
            { value: "rental", label: "خانه های اجاره ای" },
            { value: "mortgage", label: "خانه های رهن" },
          ]}
        />
        <CustomSelectOption
          labelText="محل مورد نظر"
          name="location"
          customClass="!w-[247px]"
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
          value01={1000000}
          value02={20000000}
          priceRangeName={"رنج مبلغ رهن"}
          className="!w-[335px]"
        />
        <span className="border border-[#DDDDDD] max-lg:border-none"></span>
        <PriceRangeComponent
          value01={1000000}
          value02={20000000}
          priceRangeName={"رنج مبلغ اجاره"}
          className="!w-[335px]"
        />
        <span className="border border-[#DDDDDD] max-md:border-none"></span>
        <PriceRangeComponent
          value01={1000000}
          value02={20000000}
          priceRangeName={"متراژ ملک"}
          className="!w-[330px]"
        />
      </div>
    </div>
  );
};

export default FilterBox;