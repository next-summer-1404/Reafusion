'use server'
import { CreateHouseComment } from "@/core/Apis/CreateHouseComment";
import { cookies } from "next/headers";

export const CommentAction = async (state: { message: string }, formdata: FormData) => {
  const house_id = formdata.get('house_id') as string;
  const user_id = formdata.get('user_id') as string;
  const title = formdata.get('title') as string;
  const caption = formdata.get('caption') as string;
  const rating = formdata.get('rating') as string;
  const parent_comment_id = formdata.get('parent_comment_id') as string;

  if (!house_id || !user_id || !title || !caption) {
    return { message: "لطفاً تمام فیلدهای الزامی را پر کنید", error: "داده‌های ورودی ناقص است" };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value as string;

  if (!token) {
    return { message: "لطفاً ابتدا وارد حساب کاربری خود شوید", error: "توکن احراز هویت یافت نشد" };
  }

  try {
    const CommentData = { house_id, user_id, title, caption, rating, parent_comment_id };
    const response = await CreateHouseComment(CommentData, token);

    if (response) {
      return { message: "نظر شما با موفقیت ثبت شد" };
    } else {
      return { message: "خطا در ثبت نظر", error: response?.error || "پاسخ نامعتبر از API" };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'خطا در سرور';
    return { message: 'خطا در ثبت نظر', error: errorMessage };
  }
}
