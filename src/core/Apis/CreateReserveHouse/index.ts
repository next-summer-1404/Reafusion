import Api from "@/lib/Interceptor"

interface ReservationData {
  houseId: string
 reservedDates: string[];
  traveler_details: {
      firstName: string;
      lastName: string;
      gender: string;
      birthDate: string;
      nationalId: string;
  }[]
  sharedEmail: string;
  sharedMobile: string
}

export const CreateReserveHouse = async (ReservationData: ReservationData, token: string) => {
  const Resposne = await Api.post(`/api/bookings`, ReservationData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  })
  return Resposne.data
}
