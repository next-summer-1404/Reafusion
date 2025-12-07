import fetchApi from "@/lib/Interceptor/serverApi";

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
  const response = await fetchApi(`/api/admin/bookings/${id}`, {
    method: 'PUT',
    body: reservationData
  });
  return response;
};
