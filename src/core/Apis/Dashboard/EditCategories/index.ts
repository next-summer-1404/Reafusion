import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const EditCategories = async (id: string, name: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;
  const response = await Api.put(`/api/categories/${id}`, { id, name }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response.data
}
