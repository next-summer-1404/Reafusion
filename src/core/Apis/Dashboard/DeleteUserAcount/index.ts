import Api from "@/lib/Interceptor"

export const DeleteUserAcount = async (userId: string, token: string) => {
  const response = await Api.delete(`/api/admin/users/${userId}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
