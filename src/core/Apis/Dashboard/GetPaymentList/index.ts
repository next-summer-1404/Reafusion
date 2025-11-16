import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

export const GetPaymentList = async (limit: number, currentPage: number, order: string, status?: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;
  const response = await Api.get(`/api/payments?status=&page=${currentPage}&limit=${limit}&order=${order}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
