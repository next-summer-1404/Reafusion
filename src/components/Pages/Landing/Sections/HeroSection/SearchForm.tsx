import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import SelectOption from "@/components/Ui/SelectOption";
import React from "react";

const SearchForm = () => {
  return (
    <form className="space-y-5">
      <SelectOption lable={"انتخاب مقصد"} />
      <Input
        lable="تعداد نفرات"
        type="text"
        name="userCount"
        placeholder="تعداد نفرات را انتخاب کنید"
      />
      <Input
        lable="تاریخ ورود"
        type="date"
        name="arrivalDate"
        placeholder="تاریخ ورود را انتخاب کنید"
      />
      <Input
        lable="تاریخ خروج"
        type="date"
        name="departureDate"
        placeholder="تاریخ خروج را انتخاب کنید"
      />
      <FillButton
        type="submit"
        ButtonText="جستجو کنید"
        className="w-full p-3 text-center text-[16px]"
      />
    </form>
  );
};

export default SearchForm;
