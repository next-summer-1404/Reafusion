import Api from "@/lib/Interceptor"

export const DeleteFavoriteFromList = async (favoriteId: string, token: string) => {
  const response = await Api.delete(`/api/favorites/${favoriteId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data
}
