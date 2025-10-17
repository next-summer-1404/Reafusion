import Api from "@/lib/Interceptor";


export const GetAllHouses = async (
  currentPage: number,
  limit: number,
  Search?: string,
  transactionType?: "rental" | "mortgage" | "",
  minPrice?: number,
  maxPrice?: number,
  minMortgage?: number,
  maxMortgage?: number,
  minRent?: number,
  maxRent?: number,
  location?: string,
  sort?: 'price'
) => {
  const Response = await Api.get(
    `/api/houses?page=${currentPage}&limit=${limit}&search=${Search}&transactionType=${transactionType}&minPrice=${minPrice}&maxPrice=${maxPrice}&minMortgage=${minMortgage}&maxMortgage=${maxMortgage}&minRent=${minRent}&maxRent=${maxRent}$location=${location}$sort=${sort}`
  );
  return Response;
};
