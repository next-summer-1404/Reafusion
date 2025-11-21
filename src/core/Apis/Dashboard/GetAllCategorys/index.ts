import Api from "@/lib/Interceptor"

export const GetAllCategorys = async (limit: number, currentPage: number, order: string) => {
  const response = await Api.get(`/api/categories?page=${currentPage}&limit=${limit}&order=${order}`);
  return response
}
