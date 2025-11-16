import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

export const GetDashboardFinance = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;
  const response = await Api.get(`/api/seller/finance/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
