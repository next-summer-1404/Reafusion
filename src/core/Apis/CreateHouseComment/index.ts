import fetchApi from "@/lib/Interceptor/serverApi";

interface ICommentData {
  house_id: string;
  user_id: string;
  title: string;
  caption: string;
  rating: string;
  parent_comment_id: string;
}

export const CreateHouseComment = async (CommentData: ICommentData) => {
  const Response = await fetchApi<{ message?: string }>(`/api/comments`, {
    method: "POST",
    body: CommentData,
  });

  return Response;
};
