import Api from "@/lib/Interceptor"

export const CancelBookingAdmin = async (token: string, bookingId: number) => {
  const response = await Api.post(`/api/bookings/${bookingId}/cancel`, {bookingId}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response.data
}
