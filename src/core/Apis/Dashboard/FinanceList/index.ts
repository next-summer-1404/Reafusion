import { IFinanceResponse } from "@/core/types/IFinanceResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

const GetFinanceList = async (limit: number, currentPage: number, paymentStatus?: string): Promise<IFinanceResponse> => {
  const response = await fetchApi<IFinanceResponse>(`/api/seller/finance?page=${currentPage}&limit=${limit}&paymentStatus=${paymentStatus}`);
  return response
}

export default GetFinanceList