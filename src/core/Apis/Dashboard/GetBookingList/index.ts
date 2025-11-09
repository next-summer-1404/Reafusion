import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const GetBookingList = async (limit: number, currentPage: number, status?: "pending" | "canceled" | "confirmed",) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const response = await Api.get(`/api/bookings?page=${currentPage}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
  return response
}
