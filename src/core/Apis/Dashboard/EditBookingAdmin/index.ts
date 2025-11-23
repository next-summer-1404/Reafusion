import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

interface IReservationData {
  houseId: string;
  reservedDates: string[];
  traveler_details: {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    nationalId: string;
  }[];
  status: string;
  sharedEmail: string;
  sharedMobile: string;
}

export const EditBookingAdmin = async (reservationData: IReservationData, id: number) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;
  const response = await Api.put(`/api/admin/bookings/${id}`, reservationData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
