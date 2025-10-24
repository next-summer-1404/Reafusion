"use client";
import React, { useActionState, useEffect } from "react";
import SideCost from "../SideCost";
import InformTravel from "../InformTravel";
import DiscountCodeSection from "../DiscountCodeSection";
import FillButton from "@/components/Ui/Buttons/FillButton";
import EmptyButton from "@/components/Ui/Buttons/EmptyButton";
import PassengersDetailList from "../PassengersDetailList";
import { ReservationAction } from "@/app/(Main)/reserveHouse/step2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Step2Holder = () => {
  const houseId = sessionStorage.getItem('houseId');
  const userName = sessionStorage.getItem("userName");
  const userFamily = sessionStorage.getItem("userFamily");
  const gender = sessionStorage.getItem("gender");
  const nationalId = sessionStorage.getItem("nationalId");
  const phoneNumber = sessionStorage.getItem("phoneNumber");
  const birthDate = sessionStorage.getItem("birthDate");
  const arrivalDate = sessionStorage.getItem('arrivalDate');
  const departureDate = sessionStorage.getItem('departureDate');
  const sharedEmail = sessionStorage.getItem("sharedEmail");
  const price = sessionStorage.getItem("price");

  const [state, formAction] = useActionState(ReservationAction, { message: "", id: undefined as number | undefined, });
  const router = useRouter();
  console.log(state)
  
  useEffect(() => {
    if (state.message === "عملیات با موفقیت انجام شد") {
       sessionStorage.setItem("reservationId", state.id);
       toast.success("عملیات با موفقیت انجام شد")
       router.push('/reserveHouse/step3')
    } else {
        toast.error(state.error || "خطایی رخ داد");
    }
  }, [state, router])


  return (
    <div className="flex flex-col gap-8 mt-10 py-8 px-4 bg-lightGray rounded-3xl">
      <PassengersDetailList
        userName={userName as string}
        userFamily={userFamily as string}
        gender={gender as string}
        nationalId={nationalId as string}
        phoneNumber={phoneNumber as string}
        birthDate={birthDate as string}
        price={price as string}
      />
      <SideCost />
      <InformTravel
        phoneNumber={phoneNumber as string}
        sharedEmail={sharedEmail as string}
      />
      <DiscountCodeSection />
      {/* final price */}
      <div className="flex gap-2 items-center">
        <h5 className="text-dark text-2xl font-bold">قیمت کل :</h5>
        <span className="text-primary text-[32px] font-bold">{price}</span>
        <span className="text-primary text-xl">تومان</span>
      </div>
      {/* final price end */}
      {/* submit button */}
      <form action={formAction} className="flex justify-between w-full">
        <input type="hidden" name="houseId" value={houseId as string}/>
        <input type="hidden" name="userName" value={userName as string}/>
        <input type="hidden" name="userFamily" value={userFamily as string}/>
        <input type="hidden" name="gender" value={gender as string}/>
        <input type="hidden" name="nationalId" value={nationalId as string}/>
        <input type="hidden" name="phoneNumber" value={phoneNumber as string}/>
        <input type="hidden" name="birthDate" value={birthDate as string}/>
        <input type="hidden" name="arrivalDate" value={arrivalDate as string}/>
        <input type="hidden" name="departureDate" value={departureDate as string}/>
        <input type="hidden" name="sharedEmail" value={sharedEmail as string}/>
        <EmptyButton
          className="py-4 px-5 !rounded-2xl !border-gray !text-gray"
          ButtonText="مرحله قبل"
        />
        <FillButton
          className="py-4 px-5 !rounded-2xl"
          ButtonText="پرداخت آنلاین"
          type="submit"
        />
      </form>
      {/* submit button end */}
    </div>
  );
};

export default Step2Holder;
