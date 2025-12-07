import { IPayemntsResponse } from "@/core/types/IPaymentResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetPaymentList = async ( limit: number, currentPage: number, order: string, status?: string
): Promise<IPayemntsResponse> => {
  const response = await fetchApi<IPayemntsResponse>(
    `/api/payments?status=&page=${currentPage}&limit=${limit}&order=${order}`
  );

  return response;
};
