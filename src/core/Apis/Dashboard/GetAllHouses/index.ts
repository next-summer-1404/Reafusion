import { IHouse } from "@/core/types/IHouse";
import fetchApi from "@/lib/Interceptor/serverApi";

interface IAllHousesAdmin {
  data: IHouse[];
  totalCount: number;
}


export const GetAllHousesAdmin = async (limit: number, currentPage: number, order: string): Promise<IAllHousesAdmin> => {
  const response = await fetchApi<IAllHousesAdmin>(`/api/admin/houses?page=${currentPage}&limit=${limit}&order=${order}`);
  return response
}
