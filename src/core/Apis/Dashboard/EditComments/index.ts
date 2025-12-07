import fetchApi from "@/lib/Interceptor/serverApi";

interface IEditCommentDatas {
  title: string;
  caption: string;
  rating: string;
}

export const EditComments = async (id: string, EditCommentDatas: IEditCommentDatas) => {
  const response = await fetchApi(`/api/admin/comments/${id}`, {
     method: 'PUT',
     body: EditCommentDatas
  });
  return response;
}
