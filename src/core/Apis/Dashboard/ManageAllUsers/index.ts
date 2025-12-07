import { IAllUsersResponse } from "@/core/types/IAllUsersResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export const ManageAllUsers = async (currentPage: number, limit: number, role: string, order: string): Promise<IAllUsersResponse> => {
  const response = await fetchApi<IAllUsersResponse>(
    `/api/admin/users?page=${currentPage}&limit=${limit}&order=${order}&role=${role}`
  )
  return response
}
