import fetchApi from "@/lib/Interceptor/serverApi";

interface ICategoryResponse {
  data: Array<{
    id: string;
    name: string;
  }>;
  totalCount?: number;
}

export const GetHouseCategorys = async (): Promise<ICategoryResponse> => {
   const Response = await fetchApi<ICategoryResponse>(`/api/categories?page=1&limit=4`);
   return Response
}
