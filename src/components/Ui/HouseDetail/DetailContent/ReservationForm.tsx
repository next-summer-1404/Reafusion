'use client'
import React, { FC, FormEvent, useState } from "react";
import Input from "../../Input";
import FillButton from "../../Buttons/FillButton";
import { useRouter } from "next/navigation";

interface IProps {
  discountPercentage: string | number;
  price: string;
  discounted_price: string;
  houseId: string;
}

const ReservationForm: FC<IProps> = ({ discountPercentage, price, discounted_price, houseId }) => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('arrivalDate', arrivalDate);
      sessionStorage.setItem('departureDate', departureDate);
      sessionStorage.setItem('houseId', houseId);

      router.push('/reserveHouse/step1');
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-[35%] flex-col max-lg:w-full gap-6 border border-[#DDDDDD] dark:border-thidary dark:bg-dark ${discounted_price ? 'max-h-[556px]' : "!max-h-[506px]"} max-h-[556px] rounded-[24px] px-5 py-5`}>
      <Input
        lable="تاریخ ورود"
        type="date"
        value={arrivalDate}
        setState={setArrivalDate}
        name="arrivalDate"
        placeholder="تاریخ ورود را انتخاب کنید"
      />
      <Input
        lable="تاریخ خروج"
        type="date"
        value={departureDate}
        setState={setDepartureDate}
        name="departureDate"
        placeholder="تاریخ خروج را انتخاب کنید"
      />
      <Input lable="تعداد نفرات" type="text" name="userCount" placeholder="0" />
      <div className="border border-borderColor"></div>
      {discounted_price && (
        <div className="flex justify-between">
          <div className="bg-red p-2 px-4 rounded-[24px] text-whiteColor text-[14px] flex justify-center items-center">
            {discountPercentage}%- تحفیف
          </div>
          <h3 className="text-[16px] text-gray">
            <strong className="text-[24px] font-bold line-through">
              {discounted_price}
            </strong>{" "}
            تومان
          </h3>
        </div>
      )}
      <h3 className="text-[16px] text-dark dark:text-white text-left">
        <strong className="text-[24px] font-bold">{price}</strong> تومان
      </h3>
      <FillButton
        ButtonText="ثبت درخواست رزرو"
        className="p-2.5 w-full"
        type="submit"
      />
    </form>
  );
};

export default ReservationForm;
