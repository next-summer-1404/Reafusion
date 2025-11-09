import Api from "@/lib/Interceptor"

export const ConfrimBooking = async (reserveId: number, tokenValue?: string) => {
  const response = await Api.post(`/api/bookings/${reserveId}/continue`, { reserveId },  {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
  return response.data
}
