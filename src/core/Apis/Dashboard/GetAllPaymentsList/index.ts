import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const GetAllPaymentsList = async (limit: number, currentPage: number, order: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const response = await Api.get(`/api/admin/payments?page=${currentPage}&limit=${limit}&order=${order}`, {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
  });
  return response;
}
