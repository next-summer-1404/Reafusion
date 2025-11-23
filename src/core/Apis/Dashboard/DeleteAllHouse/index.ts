import Api from "@/lib/Interceptor"

export const DeleteAllHouse = async  ( token: string , houseId: string) => {
  const response = await Api.delete(`/api/admin/houses/${houseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}
