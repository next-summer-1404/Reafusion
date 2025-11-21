import Api from "@/lib/Interceptor"
import { cookies } from "next/headers";

interface IEditCommentDatas {
  title: string;
  caption: string;
  rating: string;
}

export const EditComments = async (id: string, EditCommentDatas: IEditCommentDatas) => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get('token')?.value as string;
  const response = await Api.put(`/api/admin/comments/${id}`, EditCommentDatas, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  });
  return response.data;
}
