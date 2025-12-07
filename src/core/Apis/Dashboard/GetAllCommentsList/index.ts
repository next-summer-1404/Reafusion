import { IAllCommentsList } from "@/core/types/IAllCommentsList";
import fetchApi from "@/lib/Interceptor/serverApi";

export const GetAllCommentsList = async (limit: number, currentPage: number, order: string): Promise<IAllCommentsList> => {
  const response = await fetchApi<IAllCommentsList>(
    `/api/admin/comments?page=${currentPage}&limit=${limit}&order=${order}`
  );
  return response
}
