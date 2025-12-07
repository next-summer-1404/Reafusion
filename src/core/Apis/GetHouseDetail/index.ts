import { IHouseDetailData } from "@/core/types/IHouseDetailData";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetHouseDetail = async (id: string): Promise<IHouseDetailData> => {
   const Response = await fetchApi<IHouseDetailData>(`/api/houses/${id}`);
   return Response
}