import Api from "@/lib/Interceptor"

export const ConfrimBookingAdmin = async (token: string, bookingId: number) => {
  const response = await Api.post(`/api/bookings/${bookingId}/continue`, {bookingId}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response.data
}
