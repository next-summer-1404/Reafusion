import { IAllLocationsResponse } from "@/core/types/IAllLocationsResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllLocations = async (limit: number, currentPage: number, order: string): Promise<IAllLocationsResponse> => {
  const response = await fetchApi<IAllLocationsResponse>(
    `/api/locations?page=${currentPage}&limit=${limit}&order=${order}`
  );
  return response
}
