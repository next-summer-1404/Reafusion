import Api from "@/lib/Interceptor";

interface ICommentData {
  house_id: string;
  user_id: string;
  title: string;
  caption: string;
  rating: string;
  parent_comment_id: string;
}

export const CreateHouseComment = async (CommentData: ICommentData, token:string) => {
  const Response = await Api.post(`/api/comments`, CommentData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });

  return Response.data;
};
