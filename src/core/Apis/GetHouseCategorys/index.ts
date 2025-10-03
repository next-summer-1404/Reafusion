import Api from "@/lib/Interceptor"

export const GetHouseCategorys = async () => {
   const Response = await Api.get(`/api/categories?page=1&limit=4`);
   return Response
}
