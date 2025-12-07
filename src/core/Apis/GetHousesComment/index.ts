import { IComment } from "@/core/types/ICommentResponse";
import fetchApi from "@/lib/Interceptor/serverApi";

export interface ICommentResponse {
  data: IComment[];
  totalCount: number;
}

export const GetHousesComments = async (id: string): Promise<ICommentResponse> => {
  const Response = await fetchApi<ICommentResponse>(`/api/comments?house_id=${id}`);
   
  return Response;
}