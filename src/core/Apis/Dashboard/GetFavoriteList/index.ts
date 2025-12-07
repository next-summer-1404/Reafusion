import { IFavoriteResponse } from "@/core/types/IFavoriteResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetFavoriteList = async (limit: number, currentPage: number, order: string): Promise<IFavoriteResponse> => {
  const response = await fetchApi<IFavoriteResponse>(
    `/api/favorites/user?page=${currentPage}&limit=${limit}&order=${order}`
  );
  return response;
}
