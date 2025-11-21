import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const AddCategory = async (name: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;
  const response = await Api.post(`/api/categories`, {name}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
   return response.data
}
