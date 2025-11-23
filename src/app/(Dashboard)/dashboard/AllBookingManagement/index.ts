'use server'

import { EditBookingAdmin } from "@/core/Apis/Dashboard/EditBookingAdmin";

const EditBookingAdminAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id');
  const houseId = formdata.get("houseId");
  const status = formdata.get('status'); 
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
    status: status as string,
    sharedEmail: sharedEmail as string,
    sharedMobile: sharedMobile as string,
  };

  try {
    const response = await EditBookingAdmin(reservationData, Number(id));
    if (response) {
      return {
        message: 'رزور با موفقیت ویرایش شد'
      }
    } else {
      return {
        message: 'خطا در ویرایش رزور'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "خطا در سرور";
    return { message: "خطا در ویرایش ریزروشن", error: errorMessage };
  }
}

export default EditBookingAdminAction;