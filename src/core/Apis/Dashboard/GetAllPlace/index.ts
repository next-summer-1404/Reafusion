import { IApiResponse } from "@/core/types/IApiResForGetHouses";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllPlace = async (
  limit: number,
  currentPage: number,
  search?: string,
  transactionType?: string,
  order?: string,
  minPrice?: number,
  maxPrice?: number
): Promise<IApiResponse> => {
  const params = new URLSearchParams();
  params.append('page', currentPage.toString());
  params.append('limit', limit.toString());

  if (search) params.append('search', search);
  if (transactionType) params.append('transactionType', transactionType);
  if (order) params.append('order', order);
  if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
  if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());

  const response = await fetchApi<IApiResponse>(`/api/houses/seller/user?${params.toString()}`);
  return response;
};