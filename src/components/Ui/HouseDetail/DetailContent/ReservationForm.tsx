import React, { FC } from "react";
import Input from "../../Input";
import FillButton from "../../Buttons/FillButton";

interface IProps {
  discountPercentage: string | number;
  price: string;
  discounted_price: string;
}

const ReservationForm: FC<IProps> = ({ discountPercentage, price, discounted_price }) => {
  return (
    <form className={`border border-[#DDDDDD] w-[388px] ${discounted_price ? 'max-h-[556px]' : "!max-h-[506px]"} max-h-[556px] rounded-[24px] px-5 py-5 space-y-5`}>
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
      <Input lable="تعداد نفرات" type="text" name="userCount" placeholder="0" />
      <div className="border border-[#DDDDDD]"></div>
      {discounted_price && (
        <div className="flex justify-between">
          <div className="bg-[#FF5555] p-2 px-4 rounded-[24px] text-white text-[14px] flex justify-center items-center">
            {discountPercentage}%- تحفیف
          </div>
          <h3 className="text-[16px] text-[#777777]">
            <strong className="text-[24px] font-bold line-through">
              {discounted_price}
            </strong>{" "}
            تومان
          </h3>
        </div>
      )}
      <h3 className="text-[16px] text-[#1E2022] text-left">
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
