import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const ManageAllUsers = async (currentPage: number, limit: number, role: string, order: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;
  const response = await Api.get(`/api/admin/users?page=${currentPage}&limit=${limit}&order=${order}&role=${role}`, {
    headers: {
        Authorization: `Bearer ${tokenValue}`,
    },
  })
  return response
}
