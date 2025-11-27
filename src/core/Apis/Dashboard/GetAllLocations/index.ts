import Api from "@/lib/Interceptor"

export const GetAllLocations = async (limit: number, currentPage: number, order: string) => {
  const response = await Api.get(`/api/locations?page=${currentPage}&limit=${limit}&order=${order}`);
  return response
}
