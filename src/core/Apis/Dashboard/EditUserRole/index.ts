import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const EditUserRole = async (id: string, role: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;
  const response = await Api.put(`/api/admin/users/${id}/role`, {id, role}, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}
