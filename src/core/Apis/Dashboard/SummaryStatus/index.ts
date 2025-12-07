import { ISummaryStatus } from "@/core/types/ISummaryStatus";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetSummaryStatus = async (): Promise<ISummaryStatus> => {
   const Resposne = await fetchApi<ISummaryStatus>(`/api/dashboard/summary`);
   return Resposne
}