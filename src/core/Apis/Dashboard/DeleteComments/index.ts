import Api from "@/lib/Interceptor"

export const DeleteComments = async (token: string, id: string) => {
  const response = await Api.delete(`/api/admin/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response.data
}
