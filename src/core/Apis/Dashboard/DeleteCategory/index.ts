import Api from "@/lib/Interceptor"

export const DeleteCategory = async (token: string, id: string) => {
  const response = await Api.delete(`/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response.data
}
