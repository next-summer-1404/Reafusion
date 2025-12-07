'use server'
import { CreateHouseComment } from "@/core/Apis/CreateHouseComment";

export const CommentAction = async (state: { message: string; error?: string }, formdata: FormData): Promise<{ message: string; error?: string }> => {
  const house_id = formdata.get('house_id') as string;
  const user_id = formdata.get('user_id') as string;
  const title = formdata.get('title') as string;
  const caption = formdata.get('caption') as string;
  const rating = formdata.get('rating') as string;
  const parent_comment_id = formdata.get('parent_comment_id') as string;

  if (!house_id || !user_id || !title || !caption) {
    return { message: "لطفاً تمام فیلدهای الزامی را پر کنید", error: "داده‌های ورودی ناقص است" };
  }

  try {
    const CommentData = { house_id, user_id, title, caption, rating, parent_comment_id };
    const response = await CreateHouseComment(CommentData);

  if (response) {
    return { message: "نظر شما با موفقیت ثبت شد" };
  }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'خطا در سرور';
    return { message: 'خطا در ثبت نظر', error: errorMessage };
  }

  return { message: "خطای ناشناخته", error: "عملیات انجام نشد" };
}
