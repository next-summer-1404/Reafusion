import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

export const RefreshToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("refreshToken");
  const refreshToken = token?.value as string;
  const response = await Api.post(`/api/auth/refresh`, { token: refreshToken });
  return response.data;
}
