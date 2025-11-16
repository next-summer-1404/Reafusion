import Api from "@/lib/Interceptor"

export const DeleteHouses = async (houseId: string, tokenValue: string) => { 
  const response = await Api.delete(`/api/houses/${houseId}`, {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
  });
  return response.data 
}
