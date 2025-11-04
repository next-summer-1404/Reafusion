import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const GetSummaryStatus = async () => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string
   const Resposne = await Api.get(`/api/dashboard/summary`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
   return Resposne.data
}