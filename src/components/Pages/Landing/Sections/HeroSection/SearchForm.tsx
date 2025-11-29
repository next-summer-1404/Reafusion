'use client';
import FillButton from "@/components/Ui/Buttons/FillButton";
import Input from "@/components/Ui/Input";
import { IHouse } from "@/core/types/IHouse";
import React, { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";

interface IProps {
  houses: IHouse[];
}

const SearchForm: FC<IProps> = ({ houses }) => {
  const [selectedHouseId, setSelectedHouseId] = useState<string>("");
  const [userCount, setUserCount] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!selectedHouseId || !arrivalDate || !departureDate || !userCount) {
      toast.error("لطفاً همه فیلدها را پر کنید");
      return;
    }

    if (typeof window !== "undefined") {
      sessionStorage.setItem("houseId", selectedHouseId);
      sessionStorage.setItem("arrivalDate", arrivalDate);
      sessionStorage.setItem("departureDate", departureDate);
      sessionStorage.setItem("userCount", userCount);
    }

    router.push("/reserveHouse/step1");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-[#1E2022] text-[16px] font-bold text-right pb-3">
          انتخاب خانه مورد نظر
        </h3>
        <div className="relative !max-h-[30px]">
          <select
            className="w-full p-3 bg-[#F5F5F5] dark:bg-gray indent-1 rounded-[40px] cursor-pointer text-primary dark:text-White appearance-none"
            value={selectedHouseId}
            onChange={(e) => setSelectedHouseId(e.target.value)}
            required
          >
            <option value="" disabled>
              یک خانه را انتخاب کنید
            </option>
            {houses.map((house) => (
              <option className="flex gap-3" key={house.id} value={house.id}>
                {house.title}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute left-3 top-[80%] transform -translate-y-1/2 text-[#1E2022] pointer-events-none"
            size={25}
          />
        </div>
      </div>
      <Input
        lable="تعداد نفرات"
        type="text"
        name="userCount"
        placeholder="تعداد نفرات را وارد کنید"
        value={userCount}
        setState={setUserCount}
      />
      <Input
        lable="تاریخ ورود"
        type="date"
        name="arrivalDate"
        value={arrivalDate}
        setState={setArrivalDate}
      />
      <Input
        lable="تاریخ خروج"
        type="date"
        name="departureDate"
        value={departureDate}
        setState={setDepartureDate}
      />
      <FillButton
        type="submit"
        ButtonText="رزرو کنید"
        className="w-full p-3 text-center text-[16px]"
      />
    </form>
  );
};

export default SearchForm;