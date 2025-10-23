import Api from "@/lib/Interceptor"

export const GetHouseDetail = async (id: string) => {
   const Response = await Api.get(`/api/houses/${id}`);
   return Response
}