import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const GetFavoriteList = async (limit: number, currentPage: number, order: string) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value as string;
  const response = await Api.get(`/api/favorites/user?page=${currentPage}&limit=${limit}&order=${order}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
