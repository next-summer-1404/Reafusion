import { IApiResponse } from "@/core/types/IApiResForGetHouses";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetSpecialVilas = async (): Promise<IApiResponse> => {
  const Response = await fetchApi<IApiResponse>(`/api/houses?page=1&limit=50`);
  return Response;
};
