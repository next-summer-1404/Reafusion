import { IApiResponse } from "@/core/types/IApiResForGetHouses";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllHouses = async (
  currentPage?: number,
  limit?: number,
  Search?: string,
  transactionType?: "rental" | "mortgage" | "",
  minPrice?: number,
  maxPrice?: number,
  minMortgage?: number,
  maxMortgage?: number,
  minRent?: number,
  maxRent?: number,
  // maxArea?: number,
  // minArea?: number,
  location?: string,
  sort?: 'price'
): Promise<IApiResponse> => {
  const Response = await fetchApi<IApiResponse>(
    `/api/houses?page=${currentPage}&limit=${limit}&search=${Search}&transactionType=${transactionType}&minPrice=${minPrice}&maxPrice=${maxPrice}&minMortgage=${minMortgage}&maxMortgage=${maxMortgage}&minRent=${minRent}&maxRent=${maxRent}$sort=${sort}$location=${location}`
  );
  return Response;
};
