import Api from "@/lib/Interceptor";
import { cookies } from "next/headers";

export const GetAllPlace = async (
  limit: number,
  currentPage: number,
  search?: string,
  transactionType?: string,
  order?: string,
  minPrice?: number,
  maxPrice?: number
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const params = new URLSearchParams();
  params.append('page', currentPage.toString());
  params.append('limit', limit.toString());

  if (search) params.append('search', search);
  if (transactionType) params.append('transactionType', transactionType);
  if (order) params.append('order', order);
  if (minPrice !== undefined) params.append('minPrice', minPrice.toString());
  if (maxPrice !== undefined) params.append('maxPrice', maxPrice.toString());

  const response = await Api.get(`/api/houses/seller/user?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
  });
  return response;
};