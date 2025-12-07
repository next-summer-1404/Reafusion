import { IBookingResponse } from "@/core/types/IBookingDatas";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetBookingList = async (limit: number, currentPage: number, status?: "pending" | "canceled" | "confirmed",): Promise<IBookingResponse> => {
  const response = await fetchApi<IBookingResponse>(`/api/bookings?page=${currentPage}&limit=${limit}`);
  return response
}
