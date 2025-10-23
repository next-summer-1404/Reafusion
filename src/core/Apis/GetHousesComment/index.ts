import Api from "@/lib/Interceptor"

export const GetHousesComments = async (id: string) => {
  const Response = await Api.get(`/api/comments?house_id=${id}`);
   
  return Response;
}