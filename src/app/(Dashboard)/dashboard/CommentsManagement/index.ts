'use server'
import { EditComments } from "@/core/Apis/Dashboard/EditComments";

const EditCommentsAction = async (state: { message: string }, formdata: FormData) => {
  const id = formdata.get('id') as string;
  const title = formdata.get('title') as string;
  const caption = formdata.get('caption') as string;
  const rating = formdata.get('rating') as string;

  try {
    const EditCommentDatas = { title, caption, rating };
    const response = await EditComments(id, EditCommentDatas);
    if (response) {
      return {
        message: 'نظر با موفقیت ویرایش شد'
      } 
    } else {
      return {
        message: 'خظا در ویرایش نظر'
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message: "خطا در سرور";
    return { message: "خطا در تاغییر اطلاعات", error: errorMessage };
  }
}

export default EditCommentsAction