import { ICategoryResponse } from "@/core/types/ICategoriesResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllCategorys = async (limit: number, currentPage: number, order: string): Promise<ICategoryResponse> => {
  const response = await fetchApi<ICategoryResponse>(`/api/categories?page=${currentPage}&limit=${limit}&order=${order}`);
  return response
}
