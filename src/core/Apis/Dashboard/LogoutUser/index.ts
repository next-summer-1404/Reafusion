import Api from "@/lib/Interceptor"

export const LogoutUser = async () => {
  const response = await Api.post(`/api/auth/logout`);
  return response.data;
}
