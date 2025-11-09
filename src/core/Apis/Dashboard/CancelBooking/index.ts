import Api from "@/lib/Interceptor"

export const CancelBooking = async (reserveId: number, tokenValue?: string) => {
   const resposne = await Api.post(`/api/bookings/${reserveId}/cancel`, { id: reserveId }, {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
   return resposne.data
}
