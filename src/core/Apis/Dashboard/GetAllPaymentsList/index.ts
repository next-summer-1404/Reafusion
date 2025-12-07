import { IAllPaymentsResponse } from "@/core/types/IAllPaymnetsResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllPaymentsList = async (limit: number, currentPage: number, order: string): Promise<IAllPaymentsResponse> => {
  const response = await fetchApi<IAllPaymentsResponse>(
    `/api/admin/payments?page=${currentPage}&limit=${limit}&order=${order}`
  );
  return response;
}
