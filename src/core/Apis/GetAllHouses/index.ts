import Api from "@/lib/Interceptor";

export const GetAllHouses = async (
  currentPage: number,
  limit: number,
  Search?: string,
  transactionType?: "rental" | "mortgage",
  minPrice?: number,
  maxPrice?: number,
) => {
  const Response = await Api.get(
    `/api/houses?page=${currentPage}&limit=${limit}&search=${Search}&transactionType=${transactionType}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  return Response;
};
