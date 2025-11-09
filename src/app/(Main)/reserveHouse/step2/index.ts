'use server'
import { CreateReserveHouse } from "@/core/Apis/CreateReserveHouse";
import { cookies } from "next/headers";

export const ReservationAction = async (state: { message: string }, formdata: FormData) => {
  const houseId = formdata.get("houseId");
  const arrivalDate = formdata.get("arrivalDate");
  const departureDate = formdata.get("departureDate");
  const reservedDates = [arrivalDate as string, departureDate as string];
  const firstName = formdata.get("userName");
  const lastName = formdata.get("userFamily");
  const gender = formdata.get("gender");
  const birthDate = formdata.get("birthDate");
  const nationalId = formdata.get("nationalId");
  const traveler_details = [
    {
      firstName: firstName as string,
      lastName: lastName as string,
      gender: gender as string,
      birthDate: birthDate as string,
      nationalId: nationalId as string,
    },
    {
      firstName: firstName as string,
      lastName: lastName as string,
      gender: gender as string,
      birthDate: birthDate as string,
      nationalId: nationalId as string,
    },
  ];
  const sharedEmail = formdata.get("sharedEmail");
  const sharedMobile = formdata.get("phoneNumber");

  const reservationData = {
    houseId: houseId as string,
    reservedDates,
    traveler_details,
    sharedEmail: sharedEmail as string,
    sharedMobile: sharedMobile as string,
  };

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value as string;
  
  if (!token) {
      return { message: "لطفاً ابتدا وارد حساب کاربری خود شوید", error: "توکن احراز هویت یافت نشد" };
  }

  try {
    const response = await CreateReserveHouse(reservationData, token);
    if (response) {
      return { message: "عملیات با موفقیت انجام شد", id: response.id };
    } else { 
      return { message: "خطا در ثبت ریزروشن", error: response?.error || "پاسخ نامعتبر از API" };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ثبت ریزروشن", error: errorMessage };
  }
};
