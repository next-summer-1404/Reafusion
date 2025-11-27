import Api from "@/lib/Interceptor"

export const DeleteLocationAdmin = async (id: string , token: string) => {
  const response = await Api.delete(`/api/locations/${id}`,  {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}
