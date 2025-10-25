import Api from "@/lib/Interceptor"

export const GetBlogList = async (limit?: number,currentPage?: number, title?: string) => {
  const response = await Api.get(`/api/blogs?page=${currentPage}&limit=${limit}title=${title}`);
  return response
}
