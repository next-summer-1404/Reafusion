import Api from "@/lib/Interceptor"

export const DeleteBookingAdmin = async (token: string, bookingId: number) => {
  const response = await Api.delete(`/api/admin/bookings/${bookingId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response  
}
