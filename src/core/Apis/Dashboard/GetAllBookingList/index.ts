import { IBookingData } from "@/core/types/IBookingDatas";
import fetchApi from "@/lib/Interceptor/serverApi";

interface IAllBookingResponse {
  data: IBookingData[];
  totalCount: number;
}

export const GetAllBookingList = async (limit: number, currentPage: number, order: string): Promise<IAllBookingResponse> => {
  const response = await fetchApi<IAllBookingResponse>(
    `/api/admin/bookings?page=${currentPage}&limit=${limit}&order=${order}`
  );
  return response;
};
