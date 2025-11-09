import Api from "@/lib/Interceptor"

export const DeleteBooking = async (reserveId: number, tokenValue?: string) => {
  const response = await Api.delete(`/api/bookings/${reserveId}`, {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
  return response.data
}
