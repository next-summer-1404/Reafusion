import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

const GetFinanceList = async (limit: number, currentPage: number, paymentStatus?: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const response = await Api.get(`/api/seller/finance?page=${currentPage}&limit=${limit}&paymentStatus=${paymentStatus}`, {
    headers: {
        Authorization: `Bearer ${tokenValue}`,
    },
  });
  return response
}

export default GetFinanceList